import React,{useState, useEffect} from 'react'
import { Card, Form, Button,Divider} from 'semantic-ui-react'
import  {handleAddQuestion} from '../actions/questions'
import {Redirect } from 'react-router-dom'
import {connect } from "react-redux";
import {activeNavItem} from '../actions/navItem'
import PropTypes from 'prop-types';

function NewQuestion(props) {
  const [optionOne, setOptionOne]=useState("")
  const [optionTwo, setOptionTwo]=useState("")
  const [toHome, setToHome]=useState(false)
  const {dispatch}=props
  useEffect(() => {
    dispatch(activeNavItem('New Question'))
  }, [dispatch])
 
 const handleChange = (e) => {
   const {name, value} =e.target
   if(name==='optionOne'){
    setOptionOne(value );
   }
   if(name==='optionTwo'){
    setOptionTwo(value );
   }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const{user, dispatch}=props
    dispatch(handleAddQuestion(optionOne, optionTwo, user));
    dispatch(activeNavItem("home"));
    setOptionOne('')
    setOptionTwo('')
    setToHome(true)
  };

    if (toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="col-lg-6 col-md-8 m-auto">
        <Card fluid>
          <Card.Content
            textAlign="center"
            style={{ background: "rgba(0,0,0,.05)" }}
          >
            <Card.Header>Create New Question</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <span>
                <b>Complete the question:</b>
              </span>
              <h4>Would you rather ...</h4>
              <Form>
                <Form.Field>
                  <input
                    placeholder="Enter Option One Text Here"
                    name="optionOne"
                    value={optionOne}
                    onChange={handleChange}
                  />
                </Form.Field>

                <Divider horizontal>Or</Divider>
                <Form.Field>
                  <input
                    placeholder="Enter Option Two Text Here"
                    name="optionTwo"
                    value={optionTwo}
                    onChange={handleChange}
                  />
                </Form.Field>
                <Button
                  basic
                  color="pink"
                  type="submit"
                  fluid
                  onClick={handleSubmit}
                  disabled={
                    optionOne === "" || optionTwo === ""
                  }
                >
                  Submit
                </Button>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  
} 
function mapStateToProps({ authedUser}) {
  return {user:authedUser.user};
}

export default connect(mapStateToProps)(NewQuestion);

NewQuestion.propTypes = {
  user:PropTypes.string
};
  

  