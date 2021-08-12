import { SET_QUESTION_STATE } from "../actions/questionState";

export default function questionState(state = "", action) {
  switch (action.type) {
    case SET_QUESTION_STATE:
      return action.answered;
    default:
      return state;
  }
}
