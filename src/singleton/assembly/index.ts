
// assembly/model.ts
import {
  PersistentUnorderedMap,
  math,
  Context,
  PersistentVector,
} from "near-sdk-as";



//Users generating their confessions on blockchain
export const confessions = new PersistentUnorderedMap<u32, Confession>("confessions");

//stores each book with its owners
export const confessors = new PersistentUnorderedMap<u32, Array<AccountId>>("access");

export const comments = new PersistentVector<CommentsPosted>("m");

type AccountId = string;


@nearBindgen
export class CommentsPosted {
  confessionId: u32;
  sender: string;
  constructor(public text: string, confessionId: u32) {
    this.sender = Context.sender;
    this.confessionId = confessionId;
    this.text = text;
  }
}

@nearBindgen
export class TypeOfConfession {
  subject: string;
  details: string;
  nickname: string;
}


@nearBindgen
export class Confession {
  id: u32;
  user: AccountId = Context.sender;
  nickname: string;
  category: string;
  details: string;



  constructor(nickname: string, category: string, subject: string, details: string) {
    this.id = math.hash32<string>(nickname);
    this.nickname = nickname;
    this.category = category;
    this.details = details;
  }

  static addConfession(nickname: string, subject: string, category: string, details: string): Confession {
    const confession = new Confession(nickname, category, subject, details);
    confessions.set(confession.id, confession);

    return confession;
  }

  static findConfessionById(id: u32): Confession {
    return confessions.getSome(id);
  }

  static findConfessions(offset: u32, limit: u32): Confession[] {
    return confessions.values(offset, offset + limit);
  }

  static getConfessionsByIdAndUpdate(id: u32, type: TypeOfConfession): Confession {
    const confession = this.findConfessionById(id);

    confession.nickname = type.nickname;
    confession.details = type.details;

    confessions.set(id, confession);

    return confession;

  }

  static findConfessionById_Terminate(id: u32): void {
    confessions.delete(id);
  }
}
