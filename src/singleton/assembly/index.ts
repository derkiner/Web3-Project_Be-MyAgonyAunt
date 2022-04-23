// Methods to be taken from near database
import {
  PersistentUnorderedMap, // Creating unordered map with a prefix
  math, // Math-oriendted utility
  Context, // contract & blockchain-based details
  PersistentVector, // Implements an array
} from 'near-sdk-as'


// Clients generating their confessions on blockchain
export const confessions = new PersistentUnorderedMap<u32, Confession>(
  'confessions',
)

//
export const confessors = new PersistentUnorderedMap<u32, Array<AccountId>>(
  'access',
)

export const comments = new PersistentVector<CommentsPosted>('m')

type AccountId = string

// Model - decorator for 'CommentsPosted' class before storage
@nearBindgen
export class CommentsPosted {
  confessionId: u32
  sender: string
  //models support conctructors
  constructor(public text: string, confessionId: u32) {
    this.sender = Context.sender
    this.confessionId = confessionId
    this.text = text
  }
}

@nearBindgen
export class TypeOfConfession {
  subject: string
  details: string
  nickname: string
}

@nearBindgen
export class Confession {
  id: u32
  user: AccountId = Context.sender
  nickname: string
  category: string
  details: string

  constructor(
    nickname: string,
    category: string,
    subject: string,
    details: string,
  ) {
    this.id = math.hash32<string>(nickname)
    this.nickname = nickname
    this.category = category
    this.details = details
  }

  static addConfession(
    nickname: string,
    subject: string,
    category: string,
    details: string,
  ): Confession {
    const confession = new Confession(nickname, category, subject, details)
    confessions.set(confession.id, confession)

    return confession
  }

  static findConfessionById(id: u32): Confession {
    return confessions.getSome(id)
  }

  static findConfessions(offset: u32, limit: u32): Confession[] {
    return confessions.values(offset, offset + limit)
  }

  static getConfessionsByIdAndUpdate(
    id: u32,
    type: TypeOfConfession,
  ): Confession {
    const confession = this.findConfessionById(id)

    confession.nickname = type.nickname
    confession.details = type.details

    confessions.set(id, confession)

    return confession
  }

  static findConfessionById_Terminate(id: u32): void {
    confessions.delete(id)
  }
}
