// import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {saveQuestion, saveQuestionAnswer} from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function saveAnswer (user,qid,answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser:user,
    qid,
    answer
  }
}

export function handleAddQuestion (question) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
export function handleSaveAnswer (authedUser,qid, answer) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer({authedUser, qid, answer})
      .then(() => dispatch(saveAnswer(authedUser,qid,answer)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}


