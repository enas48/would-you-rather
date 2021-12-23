import React, {useState} from 'react'
import { Card, Feed, Button , Form, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import  {handleSaveAnswer} from '../actions/shared'
import {   Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
function QuestionDetails(props) {
  const [value, setValue]= useState('')
  const [toPoll, setToPoll] = useState(false)

 const handleChange = (e,  {value} ) => {
   setValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = props.user;
    const questionId = props.id;
    const answer = value;
    props.dispatch(handleSaveAnswer(user, questionId, answer));
    setValue('')
    setToPoll(true)
  };

    const questionId = props.id;
    const question = props.questions[questionId];
    if (toPoll === true) {
      return <Redirect to={`/questions/${questionId}`} />;
    }

    return (
      <div className="col-lg-6 col-md-8 m-auto">
        <Card fluid>
          <Card.Content style={{ background: "rgba(0,0,0,.05)" }}>
            <Card.Header> {question.author} asks:</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label
                  image={props.users[question.author].avatarURL}
                />
                <Feed.Content>
                  <Feed.Summary>
                    <Form>
                      <Form.Field>
                        <h2>
                          <b>Would You Rather</b>
                        </h2>
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          radio
                          label={question.optionOne.text}
                          name="checkboxRadioGroup"
                          value="optionOne"
                          checked={value === "optionOne"}
                          onChange={handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          radio
                          label={question.optionTwo.text}
                          name="checkboxRadioGroup"
                          value="optionTwo"
                          checked={value === "optionTwo"}
                          onChange={handleChange}
                        />
                      </Form.Field>
                    </Form>
                    <Button
                      basic
                      color="pink"
                      fluid
                      onClick={handleSubmit}
                      disabled={value === ""}
                    >
                      Submit
                    </Button>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
            <Button color='pink' as={Link} to="/" labelPosition='left' icon='left chevron' content='Back' />
      </div>
    );
  
}
function mapStateToProps( {users,authedUser,questions} ,id){
    const user=authedUser.user
    return {user:user, questions,users};
  }
  
  export default connect(mapStateToProps)(QuestionDetails) 
  
  QuestionDetails.propTypes = {
    user:PropTypes.string,
    users:PropTypes.object,
    questions:PropTypes.object
  }; 

  