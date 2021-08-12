export const SET_QUESTION_STATE = "SET_QUESTION_STATE";

export function setQuestionState(answered) {
  return {
    type: SET_QUESTION_STATE,
    answered,
  };
}
