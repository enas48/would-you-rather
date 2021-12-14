import React, {Component,Fragment} from 'react'
import { Card, Button, Image} from 'react-bootstrap'
import { getUsers} from '../actions/shared'
import {authenticate} from '../actions/authedUser'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Dropdown,Form } from 'semantic-ui-react'
class Login extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers())
  }
  state={
    authedUser:""
  }

  handleChange=(event, data)=>{
console.log(data.value)
    this.setState({  authedUser:data.value})
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const { state } = this.props.location;
    const redirectUrl = state ? state.from.pathname : "/";
    this.props.dispatch(authenticate(this.state.authedUser, redirectUrl) )

  }
  render() {
  return (
<Card className="col-5 m-auto">
<Card.Header>
  <h5 className="center"><p><b>Welcome to would you rather App!</b></p>
please sign in to continue</h5></Card.Header>
  <Card.Body className="center">
    <img src='logo192.png' alt=""/>

{/*
  <Form.Select aria-label="Default select example" defaultValue={this.state.authedUser} onChange={this.handleChange}>
<option disabled  value={this.state.authedUser} hidden >Open this select menu</option>
 {this.props.users.map(user=>{
    const avatarUrl=user. avatarURL
    return(
  
      <option value={user.name} key={user.id} style={{backgroundImage:`url(${avatarUrl})`}}>
   
 
      {user.name}

</option>

)}
  )}
  </Form.Select>
  */}
  <Form.Field>
   <Dropdown
    placeholder='Select User'
    fluid
    selection
    options={this.props.users}
  onChange={this.handleChange}
  />


<Button variant="info" className="w-100" onClick={this.handleSubmit} disabled={!this.state.authedUser}>Sign In</Button>
</Form.Field>
  </Card.Body>
</Card>


  )
  }
} 

function mapStateToProps( {users} ){
  const allUsers= Object.keys(users).map((user)=>{

    // return users[user];
    return {
      key: users[user].id,
      text: users[user].name,
      value: users[user].id,
      image: { avatar: true, src: users[user].avatarURL},
    }
  })
  console.log(allUsers)
  return {users: allUsers};
}

export default withRouter(connect(mapStateToProps)(Login)) 