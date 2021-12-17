import {getInitialData} from '../utils/api';
import { receiveUsers} from './users';
import { receiveQuestions, saveAnswer} from './questions';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { saveQuestionAnswer } from "../utils/api";
import { saveUserAnswer } from "./users";

export function handleInitialData(){
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({  users,questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
export function handleSaveAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(saveUserAnswer(authedUser, qid, answer));
        dispatch(saveAnswer(authedUser, qid, answer));
      })
      .then(() => dispatch(hideLoading()));
  };
}