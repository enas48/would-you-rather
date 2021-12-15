import { RECEIVE_QUESTIONS,  ADD_QUESTION, SAVE_QUESTION_ANSWER} from "../actions/questions"


export default function questions(questions = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...questions,
        ...action.questions
      }
      case ADD_QUESTION :
        return {
          ...questions,
          [action.question.id]: action.question
        }
        case SAVE_QUESTION_ANSWER :
          const {authedUser,qid,answer} = action
          return {
            ...questions,
            [qid]: {
              ...questions[qid],
              [answer]: {
                ...questions[qid][answer],
                votes: questions[qid][answer].votes.concat([authedUser])
              }
            }
          }

    default :
      return questions
  }
}