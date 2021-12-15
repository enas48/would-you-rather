import { RECEIVE_QUESTIONS,  ADD_QUESTION, SAVE_QUESTION_ANSWER} from "../actions/questions"


export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
      case ADD_QUESTION :
        return {
          ...state,
          [action.question.id]: action.question
        }
        case SAVE_QUESTION_ANSWER :
          const {authedUser,questionId,answer} = action.payload
          return {
            ...state,
            [questionId]: {
              ...state[questionId],
              [answer]: {
                ...state[questionId][answer],
                votes: state[questionId][answer].votes.concat([authedUser])
              }
            }
          }

    default :
      return state
  }
}