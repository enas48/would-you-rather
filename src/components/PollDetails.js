import React, { Component} from 'react'
import { Card, Feed} from 'semantic-ui-react'
import { connect } from 'react-redux'


class PollDetails extends Component {

  render(){
      const questionId=this.props.match.params.id
      const question= this.props.questions[questionId]
      const author=this.props.users[question.author]
      const optiononeVotes= question.optionOne.votes.length;
      const optiontwoVotes= question.optionTwo.votes.length;
      const votes= question.optionOne.votes.length + question.optionTwo.votes.length
  
      return (
    <div className="col-md-7 m-auto">
    <Card fluid >
    <Card.Content style={{background:'rgba(0,0,0,.05)'}}>
      <Card.Header>Asked by {question.author}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image={author.avatarURL}  />
          <Feed.Content>
            <Feed.Summary>
            <h2>Results:</h2>
            <Card>
      <Card.Content>
        <Card.Header>{question.optionOne.text}</Card.Header>
        <Card.Description>
          <p style={{textAlign:'center'}}>{optiontwoVotes} out of {votes} votes</p>
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header>{question.optionTwo.text}</Card.Header>
        <Card.Description>
        <p style={{textAlign:'center'}}>{optiononeVotes} out of {votes} votes</p>
        </Card.Description>
      </Card.Content>
    </Card>

            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card> 
  </div>
  )
} 
}
function mapStateToProps( {users,questions} ){
    return {questions,users};
  }
  
  export default connect(mapStateToProps)(PollDetails) 

  

