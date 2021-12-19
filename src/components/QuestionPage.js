import React from 'react'
import { connect } from 'react-redux'
import QuestionDetails from './QuestionDetails'
import PollDetails from './PollDetails'
import NotFound from "./NotFound";
import PropTypes from 'prop-types';

function QuestionPage (props){

    const{user,questions} = props;
    const questionId = props.match.params.id;
    if (!Object.keys(questions).includes(questionId)) {
       return <NotFound />;
    }
    if (Object.keys(user.answers).includes(questionId)) {
      return <PollDetails id={questionId} />;
    } else {
      return <QuestionDetails id={questionId} />;
    }
  
}
function mapStateToProps( {users,authedUser,questions} ){
    const user=users[authedUser.user]
    return {user:user, questions,users};
  }
  
  export default connect(mapStateToProps)(QuestionPage)

  QuestionPage.propTypes = {
    user:PropTypes.string,
    users:PropTypes.object,
    questions:PropTypes.object
  }; 


  