 
import React, { Component} from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {logoutUser} from '../actions/authedUser'
import {withRouter} from 'react-router-dom'
import {activeNavItem} from '../actions/navItem'
import {  Menu,Image } from 'semantic-ui-react'
class Navbar extends Component {
  handleItemClick = (e, { name }) => this.props.dispatch(activeNavItem(name))
  handleLogout=()=>{
    const { state } = this.props.location;
    const redirectUrl = state ? state.from.pathname : "/login";
    this.props.dispatch(logoutUser(redirectUrl))
    this.props.dispatch(activeNavItem(''))
  }

  render(){
    const { activeItem ,user} = this.props
  return (
    <Menu pointing secondary>
      <Menu.Item
        as={Link}
        to="/"
        name="home"
        active={activeItem === "home"}
        onClick={this.handleItemClick}
      />

      <Menu.Item
        as={Link}
        to="/add"
        name="New Question"
        active={activeItem === "New Question"}
        onClick={this.handleItemClick}
      />
      <Menu.Item
        as={Link}
        to="/leaderboard"
        name="Leader Board"
        active={activeItem === "Leader Board"}
        onClick={this.handleItemClick}
      />
      {user && (
        <Menu.Menu position="right" className="nav-mob">
          <span>Hello, {user.name} </span>
          <Image circular src={user.avatarURL} avatar />
          <Menu.Item name="logout" onClick={this.handleLogout} />
        </Menu.Menu>
      )}
    </Menu>
  );
  }
} 
function mapStateToProps( {users,authedUser,Nav} ){
  const user=users[authedUser.user]
  return {user:user, activeItem: Nav.item};
}

export default withRouter(connect(mapStateToProps)(Navbar))
  