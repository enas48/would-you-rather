import React, { Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question'
class AnsweredQuestion extends Component {
    render(){
  return (
  <div>

{this.props.questions
.filter((id)=> 
this.props.user.answers[id])

 .map((id)=>
     <Question key={id} id={id} answered="true"/>
 )
}
  </div>
  )
    }
} 
function mapStateToProps( {users,authedUser,questions} ){
    const user=users[authedUser.user]
    return {user:user, questions:Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)};
  }
  
  export default connect(mapStateToProps)(AnsweredQuestion) 