import {RECEIVE_USERS} from '../actions/users'
import {ADD_QUESTION,SAVE_QUESTION_ANSWER} from "../actions/questions"

export default function users(users={}, action){
    switch (action.type){
        case RECEIVE_USERS:
            return{...users, ...action.users}
            case ADD_QUESTION :
            const{author, id}=action.question
            return {
                ...users,
                [author]: {
                    ...users[author],
                    questions: users[author].questions.concat([id])
                  }
            }
            case SAVE_QUESTION_ANSWER :
                const {authedUser,qid,answer} = action
                return {
                    ...users,
        [authedUser]: {
          ...users[authedUser],
         answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
                }
            default :
            return users
    }
    
}