//importing values from model (Singleton=> assembly=>index.tx)

import { Confession, TypeOfConfession, comments, CommentsPosted } from './singleton/assembly/index'

// Contract code is down below

// Function returning new confessions through certain parameters
export function addNewConfession(
  nickname: string,
  subject: string,
  category: string,
  details: string,
  confessionId:u32,
): Confession {
  return Confession.addConfession(nickname, subject, category, details, confessionId)
}

  
export function getConfessions(offset: u32, limit: u32 = 5): Confession[] {
  return Confession.findConfessions(offset, limit)
}


export function uptodateConfession(
  id: u32,
  type: TypeOfConfession,
): Confession {
  return Confession.getConfessionsByIdAndUpdate(id, type)
}

export function deleteConfession(id: u32): void {
  Confession.findConfessionById_Terminate(id)
}

export function Messages(text: string): bool {
  assert(text.length > 0, "This part can't be empty!")
  const texts = new PersistentDeque<string>("texts")
  texts.pushFront(Context.sender + " claims" + texts) 
  return true
}


export function newAdvice(text: string, confessionId: u32): void {
  //Generating a new piece of advice, then populating the relevant parts
  const advice = new CommentsPosted(text, confessionId)
  //Pushing the advice
  comments.push(advice)
}

  
//Maximum limit for confessions (To enable reasonable gas prices)
const totalConfession = 5
//This function returns an array regarding recommendations given by clients. It is a view method.
export function obtainAdvice(): CommentsPosted[] {
  const quantityOfAdvice = min(totalConfession, comments.length)
  const startIndex = comments.length - quantityOfAdvice
  const outcome = new Array<CommentsPosted>(quantityOfAdvice)
  for (let i = 0; i < quantityOfAdvice; i++) {
    outcome[i] = comments[i + startIndex]
  }
  return outcome
}

export function grabAdviceByCommentId(
  id: i32,
  limit: i32 = 5,
): CommentsPosted[] {
  const totalPieceOfAdvice = min(limit, comments.length)
  const startIndex = comments.length - totalPieceOfAdvice
  const result = new Array<CommentsPosted>(totalPieceOfAdvice)
  for (let y = 0; y < totalPieceOfAdvice; y++) {
    if (comments[y].confessionId == id) {
      result[y] = comments[y + startIndex]
    }
  }
  return result
}
