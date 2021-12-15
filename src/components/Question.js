import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Card, Feed, Button } from 'semantic-ui-react'
class Question extends Component {

    render(){
        let text=this.props.question.optionOne.text;
        if(text.length > 13){
         text =  '...' + text.substr(0, 13) + '...'    
        }
        let author=this.props.question.author
  return (

    <Card fluid>
    <Card.Content style={{background:'rgba(0,0,0,.05)'}}>
      <Card.Header>{author} asks:</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image={this.props.users[author].avatarURL}  />
          <Feed.Content>
            <Feed.Summary>
                <h5>Would you rather</h5>
                <p>{text}</p>
                <Button basic color='pink' fluid  >View Poll</Button>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>  

  )
    }
} 

function mapStateToProps( {users} ){

    return {users:users};
  }
  
  export default connect(mapStateToProps)(Question) 