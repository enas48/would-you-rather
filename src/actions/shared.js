import {getInitialData} from '../utils/api';
import { receiveUsers} from './users';
import { receiveQuestions} from './questions';
import { showLoading, hideLoading } from 'react-redux-loading-bar'


export function getQuestions(){
    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({questions}) =>{
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