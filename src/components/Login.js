import {React, Component} from 'react'
import {Form, Card, Button} from 'react-bootstrap'
import { getUsers} from '../actions/shared'
import {logIn} from '../actions/authedUser'
import { connect } from 'react-redux'


class Login extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers())
  }
  state={
    authedUser:null
  }

  handleChange=(e)=>{
    console.log(e.target.value)
    this.setState({  authedUser:e.target.value})
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.authedUser!==''){
    this.props.dispatch(logIn(this.state.authedUser))
    }else{
      return
    }
  }
  render() {
  return (
<Card className="col-5 m-auto">
<Card.Header>
  <h5 className="center"><p>Welcome to would you rather App!</p>
please sign in to continue</h5></Card.Header>
  <Card.Body className="center">
    <img src='logo192.png' alt=""/>
  <Form.Select aria-label="Default select example" onChange={this.handleChange}>
  <option disabled selected value hidden >Open this select menu</option>
  {Object.keys(this.props.users).map(user=>
  <option value={user} key={user}>{user}</option>    
    )}
{/* 
  <option value="2">Two</option>
  <option value="3">Three</option> */}
</Form.Select>
<Button variant="info" className="w-100" onClick={this.handleSubmit}>Sign In</Button>
  </Card.Body>
</Card>


  )
  }
} 

function mapStateToProps( {users} ){
  return {users};
}

export default connect(mapStateToProps)(Login) 