import React, { Component} from 'react'
import { connect } from 'react-redux'
import QuestionDetails from './QuestionDetails'
import PollDetails from './PollDetails'
import NotFound from './NotFound'
class QuestionPage extends Component {

  render(){
      const questionId=this.props.match.params.id
    
    if(Object.keys(this.props.questions).includes(questionId)){

      if(Object.keys(this.props.user.answers).includes(questionId)){
        return(
          <PollDetails id={questionId}/>
        )
      }else{
        return(
          <QuestionDetails id={questionId}/>
        )
      }
    }else{
      return <NotFound/>
    }

} 
}
function mapStateToProps( {users,authedUser,questions} ){
    const user=users[authedUser.user]
    return {user:user, questions,users};
  }
  
  export default connect(mapStateToProps)(QuestionPage) 

  