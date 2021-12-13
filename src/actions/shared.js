import {getInitialData} from '../utils/api';
import { receiveUsers} from './users';
import { receiveQuestions} from './questions';

import { showLoading, hideLoading } from 'react-redux-loading-bar'

// const AUTHED_ID='tylermcginnis';

export function handleInitialData(){
    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            // dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}


export function handleLoginData(authedId){
    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) =>{
            // dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))

            dispatch(hideLoading())
        })
    }
    
}


export function getUsers(){
    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users}) =>{
            dispatch(receiveUsers(users))
            dispatch(hideLoading())
        })
    }
    
}