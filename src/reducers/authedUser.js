import {LOGIN, LOGOUT} from '../actions/authedUser'
export default function authedUser(state={loggedIn:false,user: null}, action){
    switch (action.type){
        case LOGIN:
            return {...state,loggedIn:true, user:action.user}
         case LOGOUT:
            return { ...state, loggedIn: false, user: null };  
            default :
            return state
    }
}