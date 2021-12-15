import React, { Component} from 'react'
import { Card, Feed, Button , Form, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import  {handleSaveAnswer} from '../actions/questions'

class QuestionPage extends Component {
    state = {value: 'optionOne'}
  handleChange = (e, { value }) =>{
   this.setState({ value })
}
  handleSubmit = (e) =>{
    e.preventDefault()
       const questionId=this.props.match.params.id
       const answer=this.state.value
       const user =this.props.user

   this.props.dispatch(handleSaveAnswer(user,questionId,answer))

}
  render(){
      const questionId=this.props.match.params.id
      const question= this.props.questions[questionId]
  return (
    <div className="col-md-7 m-auto">
    <Card fluid >
    <Card.Content style={{background:'rgba(0,0,0,.05)'}}>
      <Card.Header> {question.author} asks:</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image={this.props.users[question.author].avatarURL}  />
          <Feed.Content>
            <Feed.Summary>
                <Form>
        <Form.Field>
          <h2> <b>Would You Rather</b></h2>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={question.optionOne.text}
            name='checkboxRadioGroup'
            value={'optionOne'}
            checked={this.state.value === 'optionOne'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={question.optionTwo.text}
            name='checkboxRadioGroup'
            value={'optionTwo'}
            checked={this.state.value === 'optionTwo'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
                <Button basic color='pink' fluid  onClick={this.handleSubmit}>Submit</Button>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card> 
  </div>
  )
} 
}
function mapStateToProps( {users,authedUser,questions} ){
    const user=authedUser.user
    return {user:user, questions,users};
  }
  
  export default connect(mapStateToProps)(QuestionPage) 

  