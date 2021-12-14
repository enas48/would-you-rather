 
import React, { Component} from 'react'
import { Link} from 'react-router-dom'
import {Nav, Image, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import {logoutUser} from '../actions/authedUser'
import {withRouter} from 'react-router-dom'
class Navbar extends Component {
  handleLogout=()=>{
    const { state } = this.props.location;
    const redirectUrl = state ? state.from.pathname : "/login";
    this.props.dispatch(logoutUser(redirectUrl))
  }
  render(){
    console.log(this.props.user)
  return (
<Nav variant="tabs" defaultActiveKey="/" as="ul">
  <Nav.Item >
    <Nav.Link as={Link} to="/"> Home</Nav.Link>
  </Nav.Item>
  <Nav.Item >
    <Nav.Link as={Link}  to='/add'>New Question</Nav.Link>
  </Nav.Item>
  <Nav.Item >
    <Nav.Link as={Link} to='/leaderboard' >Leader Board</Nav.Link>
  </Nav.Item>
  {this.props.user && (
      <Nav.Item className='user-info' >
        <span className='mx-2'>Hello, {this.props.user.name}  </span>
        <Image className='avater' src={this.props.user.avatarURL}  roundedCircle />
        <Button size="sm" className='text-danger mx-2' variant="light" onClick={this.handleLogout} >Logout</Button>
      </Nav.Item>
  )}
</Nav>

  )
  }
} 
function mapStateToProps( {users,authedUser} ){
  console.log(users[authedUser.user])
  const user=users[authedUser.user]
  return {user:user};
}

export default withRouter(connect(mapStateToProps)(Navbar))
  