import React, { Component} from 'react'
import { connect } from 'react-redux'
import QuestionDetails from './QuestionDetails'
import PollDetails from './PollDetails'
import {   Redirect,withRouter } from 'react-router-dom'
import history from "../components/history";
class QuestionPage extends Component {

  render(){
    const{user,questions} = this.props;
    const questionId = this.props.match.params.id;
    if (!Object.keys(questions).includes(questionId)) {
       return <Redirect to="/404" />;
    }
    if (Object.keys(user.answers).includes(questionId)) {
      return <PollDetails id={questionId} />;
    } else {
      return <QuestionDetails id={questionId} />;
    }
  } 
}
function mapStateToProps( {users,authedUser,questions} ){
    const user=users[authedUser.user]
    return {user:user, questions,users};
  }
  
  export default withRouter(connect(mapStateToProps)(QuestionPage)) 

  