import React, {useState} from 'react';
import {authenticate} from '../actions/authedUser'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Dropdown, Form, Card, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types';

function Login (props){
  const [authedUser , setAuthedUser] = useState('')
 
  const handleChange = (event, data) => {
    setAuthedUser(data.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { state } = props.location;
    const redirectUrl = state ? state.from.pathname : "/";
    props.dispatch(authenticate(authedUser, redirectUrl));
  };


    return (
      <Card className="m-auto">
        <Card.Content textAlign="center">
          <Card.Header>Welcome to would you rather App!</Card.Header>
          <Card.Meta>please sign in to continue</Card.Meta>
          <Card.Description>
            <img src="logo.png" alt="" />
            <h4>Sign in</h4>
            <Form.Field>
              <Dropdown
                placeholder="Select User"
                fluid
                selection
                options={props.users}
                onChange={handleChange}
              />
              <Button
                basic
                color="pink"
                fluid
                onClick={handleSubmit}
                disabled={!authedUser}
              >
                Sign In
              </Button>
            </Form.Field>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  
} 

function mapStateToProps( {users} ){
  const allUsers= Object.keys(users).map((user)=>{
    return {
      key: users[user].id,
      text: users[user].name,
      value: users[user].id,
      image: { avatar: true, src: users[user].avatarURL},
    }
  })
  return {users: allUsers};
}

export default withRouter(connect(mapStateToProps)(Login)) 
Login.propTypes = {
  users:PropTypes.array,
};