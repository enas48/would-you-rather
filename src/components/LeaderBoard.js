import React, { Component} from 'react'
import { connect } from 'react-redux'
import UserBoard from './UserBoard'

class LeaderBoard extends Component {
    render(){
      const users = this.props.users;
      return (
        <div className="col-lg-6 col-md-8 m-auto leader-board">
          {users.map((user) => (
            <UserBoard key={user.id} user={user} />
          ))}
        </div>
      );
    }
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

  return { users: allusers, questions };
}
  
  export default connect(mapStateToProps)(LeaderBoard)