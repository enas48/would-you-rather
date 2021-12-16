import {getInitialData} from '../utils/api';
import { receiveUsers} from './users';
import { receiveQuestions} from './questions';
import { showLoading, hideLoading } from 'react-redux-loading-bar'


export function handleInitialData(){
    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({questions, users}) =>{
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(hideLoading())
        })
    }
}
