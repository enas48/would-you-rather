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

function saveAnswer (question) {
  return {
    type: SAVE_QUESTION_ANSWER,
    question,
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
export function handleSaveAnswer (question) {
  return (dispatch, getState) => {

    dispatch(showLoading())
    return saveQuestionAnswer(question)
      .then((question) => dispatch(saveAnswer(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}


