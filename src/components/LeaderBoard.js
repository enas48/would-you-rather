import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Card, Feed, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import {activeNavItem} from '../actions/navItem'

class LeaderBoard extends Component {
 
    render(){
        const users= this.props.users
       
  return (
<div className="col-md-6 m-auto">
    {users.map(user=>
          <Card fluid key={user.id}>

    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image={user.avatarURL}  />
          <Feed.Content style={{ borderRight: '1px solid #22242626',paddingRight: '10px'}}>
            
            <Feed.Summary>
            <Card.Header><h3>{user.name}</h3></Card.Header>
      
            </Feed.Summary>
          </Feed.Content>

          <Feed.Content>
            
            <Feed.Summary>
                <h5>Would you rather</h5>
      
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card> 
    )
  }
</div>
 

  )
    }
} 

function mapStateToProps( {users, questions} ){
  const allusers=Object.keys(users).map(user=>{
    return users[user]
  })

    return {users:allusers,questions};
  }
  
  export default withRouter(connect(mapStateToProps)(LeaderBoard)) 