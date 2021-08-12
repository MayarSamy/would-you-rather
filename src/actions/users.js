export const RECEIVE_USERS = "RECEIVE_USERS";
export const CREATE_NEW_QUESTION = "CREATE_NEW_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER"

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function createNewQuestion({ authedUser, questionId }) {
  return {
    type: CREATE_NEW_QUESTION,
    question: { authedUser, questionId },
  };
}

export function addAnswer({authedUser , id , answer}){
  return {
    type: ADD_ANSWER,
    question: {authedUser , id , answer}
  }
}
