import React, { Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question'
class UnansweredQuestion extends Component {
    render(){
  return (
  <div>
{Object.entries(this.props.questions)
.filter(([id])=> !this.props.user.answers[id])
.map(([id,question])=>
    <Question key={id} question={question}/>
)}
  </div>
  )
    }
} 
function mapStateToProps( {users,authedUser,questions} ){
    const user=users[authedUser.user]
    return {user:user, questions:questions};
  }
  
  export default connect(mapStateToProps)(UnansweredQuestion) 