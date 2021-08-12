import questions from "../reducers/questions";
import { saveQuestion , saveQuestionAnswer} from "../utils/api";
import { createNewQuestion , addAnswer} from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION"

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion(optionOne, optionTwo, authedUser) {
  return (dispatch) => {
    return saveQuestion({ optionOne, optionTwo, authedUser }).then(
      (question) => {
        
        dispatch(addQuestion(question));
        dispatch(
          createNewQuestion({ authedUser: authedUser, questionId: question.id })
        );
      }
    );
  };
}

function answerQuestion({authedUser , id , answer}){
  return {
    type: ANSWER_QUESTION,
    question : {authedUser , id , answer}
  };
}

export function handleAnswerQuestion({authedUser , id , answer}){
  return (dispatch) =>{
    return saveQuestionAnswer({authedUser , id , answer}).then(
      ()=> {
        dispatch(answerQuestion({authedUser , id , answer}))
        dispatch(addAnswer({authedUser , id , answer}))
      }
    )
  }
}