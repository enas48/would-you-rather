import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import PropTypes from 'prop-types';
function UnansweredQuestion(props) {
  return (
    <div>
      {props.questions
        .filter((id) => !props.user.answers[id])
        .map((id) => (
          <Question key={id} id={id} />
        ))}
    </div>
  );
    
} 
function mapStateToProps( {users,authedUser,questions} ){
  const user=users[authedUser.user]
  return {user:user, questions:Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)};
}
  export default connect(mapStateToProps)(UnansweredQuestion) 

  UnansweredQuestion.propTypes = {
    user:PropTypes.object,
    questions:PropTypes.array
  }; 

  