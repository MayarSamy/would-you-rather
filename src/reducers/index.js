import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import questionState from "./questionState";
//import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  users,
  questions,
  questionState,
  //loadingBar: loadingBarReducer,
});
