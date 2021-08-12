import { RECEIVE_USERS, CREATE_NEW_QUESTION , ADD_ANSWER} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
      case CREATE_NEW_QUESTION:
        return {
          ...state,
          [action.question.authedUser]: {
            ...state[action.question.authedUser],
            questions: [...state[action.question.authedUser].questions, action.question.questionId],
          },
        }
      case ADD_ANSWER:
        return {
          ...state,
          [action.question.authedUser]: {
            answers: {
              ...state[action.question.authedUser].answers,
              [action.question.id]: action.question.answer
            }
          }
        }

    default:
      return state;
  }
}
