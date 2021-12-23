import React from "react";
import { Card, Feed, Label,Progress ,Button} from "semantic-ui-react";
 import { connect } from "react-redux";
 import {withRouter, Link} from 'react-router-dom'
 import PropTypes from 'prop-types';

function PollDetails(props) {
    const {id,question,users,user}=props
    const questionId = id;
    const author = users[question.author];
    const authorAnswer = user.answers[questionId];
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

if(Object.keys(user.answers).includes(questionId)){
    return (
      <div className="col-lg-6 col-md-8 m-auto">
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
            <Button color='pink' as={Link} to="/" labelPosition='left' icon='left chevron' content='Back' />
      </div>
    )
                        }else{
                          return<div></div>
                        }
  }

function mapStateToProps({ users, questions ,authedUser},id) {
  return { question :questions[id.id], users ,user:users[authedUser.user]};
}

export default withRouter(connect(mapStateToProps)(PollDetails));

PollDetails.propTypes = {
  user:PropTypes.object,
  question:PropTypes.object,
  users:PropTypes.object,
};
  

