 
import React from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {logoutUser} from '../actions/authedUser'
import {withRouter} from 'react-router-dom'
import {activeNavItem} from '../actions/navItem'
import {  Menu,Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';
function Navbar(props){
  const handleItemClick = (e, { name }) => props.dispatch(activeNavItem(name))
 const handleLogout=()=>{
    const { state } = props.location;
    const redirectUrl = state ? state.from.pathname : "/login";
    props.dispatch(logoutUser(redirectUrl))
   props.dispatch(activeNavItem(''))
  }

    const { activeItem ,user} = props
  return (
    <Menu pointing secondary>
      
      <Menu.Item
        as={Link}
        to="/"
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />

      <Menu.Item
        as={Link}
        to="/add"
        name="New Question"
        active={activeItem === "New Question"}
        onClick={handleItemClick}
      />
      <Menu.Item
        as={Link}
        to="/leaderboard"
        name="Leader Board"
        active={activeItem === "Leader Board"}
        onClick={handleItemClick}
      />
      {user && (
        <Menu.Menu position="right" className="nav-mob">
          <span>Hello, {user.name} </span>
          <Image circular src={user.avatarURL} avatar />
          <Menu.Item name="logout" onClick={handleLogout} />
        </Menu.Menu>
      )}
    </Menu>
  );
  
} 
function mapStateToProps( {users,authedUser,Nav} ){
  const user=users[authedUser.user]
  return {user:user, activeItem: Nav.item};
}

export default withRouter(connect(mapStateToProps)(Navbar))

Navbar.propTypes = {
  user:PropTypes.object,
  activeItem:PropTypes.string
};
  