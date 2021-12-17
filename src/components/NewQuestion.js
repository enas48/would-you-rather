import React,{Component} from 'react'
import { Card, Form, Button,Divider} from 'semantic-ui-react'
import  {handleAddQuestion} from '../actions/questions'
import {   Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import {activeNavItem} from '../actions/navItem'
class NewQuestion extends Component {
  state={
    optionOne:'',
    optionTwo:'',
    toHome:false
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    const{ optionOne, optionTwo}=this.state;
    const user =this.props.user
    this.props.dispatch(handleAddQuestion(optionOne, optionTwo, user))     
    this.props.dispatch(activeNavItem('home'))
    this.setState({ optionOne:'', optionTwo:'',toHome:true})

  }
  render(){
    if(this.state.toHome === true){
      return <Redirect to='/' />
  }
  return (
    <div className="col-lg-6 col-md-8 m-auto">
   <Card fluid>
    <Card.Content  textAlign='center' style={{background:'rgba(0,0,0,.05)'}}>
      <Card.Header>Create New Question</Card.Header>
      </Card.Content>
      <Card.Content  >
      <Card.Description>
      <span><b>Complete the question:</b></span>
      <h4>Would you rather ...</h4>
  <Form>
    <Form.Field>
      <input placeholder='Enter Option One Text Here' name="optionOne" value={this.state.optionOne}  onChange={this.handleChange}/>
    </Form.Field>

    <Divider horizontal >Or</Divider>
    <Form.Field>
      <input placeholder='Enter Option Two Text Here' name="optionTwo" value={this.state.optionTwo} onChange={this.handleChange}/>
    </Form.Field>
    <Button basic color='pink' type='submit' fluid onClick={this.handleSubmit}
    disabled={this.state.optionOne===''||this.state.optionTwo===''}>Submit</Button>
  </Form>
   
      </Card.Description>
    </Card.Content>
  </Card>
  </div>
  )
  }
} 

function mapStateToProps({ authedUser}) {
  return {user:authedUser.user};
}

export default connect(mapStateToProps)(NewQuestion);

  