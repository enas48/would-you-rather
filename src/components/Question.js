import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Card, Feed, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import {activeNavItem} from '../actions/navItem'
import history from "../components/history";
import PropTypes from 'prop-types';
class Question extends Component {
  toQuestion=(e, qId)=>{
        this.props.dispatch(activeNavItem(''))
        history.push(`/questions/${qId}`)
  }

    render(){
        const question = this.props.questions[this.props.id];
        let author = question.author
        let text=question.optionOne.text;
        if(text.length > 11){
         text =  '...' + text.substr(0, 10) + '...'    
        }else{
          text =  '...' + text.substr(0, text.length) + '...'    
        }
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
                <Button basic color='pink' fluid  onClick={(e) => this.toQuestion(e, question.id)}>View Poll</Button>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>  

  )
    }
} 

function mapStateToProps( {users, questions},id ){
    return {users,questions};
  }
  
  export default withRouter(connect(mapStateToProps)(Question)) 

  Question.propTypes = {
    users:PropTypes.object,
    questions:PropTypes.object
  };