import React, {  useEffect} from 'react'
import { connect } from 'react-redux'
import UserBoard from './UserBoard'
import PropTypes from 'prop-types';
import {activeNavItem} from '../actions/navItem'

function LeaderBoard (props) {
   const {dispatch}=props
    useEffect(() => {
  dispatch(activeNavItem('Leader Board'))
  }, [dispatch])

      const users = props.users;
      return (
        <div className="col-lg-6 col-md-8 m-auto leader-board">
          {users.map((user) => (
            <UserBoard key={user.id} user={user} />
          ))}
        </div>
      );   
} 

function mapStateToProps( {users, questions} ){
  const allusers = Object.keys(users)
    .map((user) => {
      return users[user];
    })
    .sort(
      (a, b) =>
        (Object.keys(b.answers).length + b.questions.length) -
        (Object.keys(a.answers).length + a.questions.length)
    );

  return { users: allusers };
}
  export default connect(mapStateToProps)(LeaderBoard)

  LeaderBoard.propTypes = {
    users:PropTypes.array
  };