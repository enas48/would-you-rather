import React, { Component } from "react";
import { Card, Feed, Label,Progress } from "semantic-ui-react";
 import { connect } from "react-redux";
//  import {   Redirect } from 'react-router-dom'
class PollDetails extends Component {
  render() {
    const questionId = this.props.match.params.id;
    const question = this.props.questions[questionId];
    const author = this.props.users[question.author];
    const authorAnswer = this.props.user.answers[questionId];
    const optiononeVotes = question.optionOne.votes.length;
    const optiontwoVotes = question.optionTwo.votes.length;
    const votes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const optionOnePrecent= (optiononeVotes / votes).toFixed(4) * 100
    const optionTwoPrecent= (optiontwoVotes / votes).toFixed(4) * 100
    const cardStyle = {
      order: optiononeVotes > optiontwoVotes ? 0 : 1,
      backgroundColor: optiononeVotes > optiontwoVotes ? "#ffcccc" : "#fff",
    };
    const cardStyleTwo = {
      backgroundColor: optiononeVotes > optiontwoVotes ? "#fff" : "#ffcccc",
    };

  //   const poll= Object.keys(this.props.user.answers).includes(questionId)
  //   if(!poll){
  //     return <Redirect to='/404' />
  // }

    return (
      <div className="col-md-6 m-auto">
        <Card fluid>
          <Card.Content style={{ background: "rgba(0,0,0,.05)" }}>
            <Card.Header>Asked by {question.author}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image={author.avatarURL} />
                <Feed.Content>
                  <Feed.Summary>
                    <h2>Results:</h2>
                    <div className="custom-card">
                      <Card fluid style={cardStyle}>
                        <Card.Content>
                          <Card.Header>{question.optionOne.text}</Card.Header>
                          <Card.Description>
                          <Progress color='pink'  percent={optionOnePrecent} progress />
                            <p style={{ textAlign: "center" }}>
                              {optiononeVotes} out of {votes} votes
                            </p>
                          </Card.Description>
                        </Card.Content>
                        <Label
                          color="yellow"
                          style={{
                            display:
                              authorAnswer === "optionOne" ? "block" : "none",
                          }}
                          floating>
                          Your vote
                        </Label>
                      </Card>

                      <Card fluid style={cardStyleTwo}>
                        <Card.Content>
                          <Card.Header>{question.optionTwo.text}</Card.Header>
                          <Card.Description>
                          <Progress  color='pink' percent={optionTwoPrecent} progress />
                            <p style={{ textAlign: "center" }}>
                              {optiontwoVotes} out of {votes} votes
                            </p>
                          </Card.Description>
                        </Card.Content>
                        <Label
                          color="yellow"
                          style={{
                            display:
                              authorAnswer === "optionTwo"
                                ? "inline-block"
                                : "none",
                          }}
                          floating >
                          Your vote
                        </Label>
                      </Card>
                    </div>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ users, questions ,authedUser}) {
  return { questions, users ,user:users[authedUser.user]};
}

export default connect(mapStateToProps)(PollDetails);
