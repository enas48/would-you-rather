import React, {Component} from 'react'
import {authenticate} from '../actions/authedUser'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Dropdown,Form,Card,Button } from 'semantic-ui-react'
import {activeNavItem} from '../actions/navItem'
import PropTypes from 'prop-types';
class Login extends Component {
  state = {
    authedUser: "",
  };

  handleChange = (event, data) => {
    this.setState({ authedUser: data.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { state } = this.props.location;
    const redirectUrl = state ? state.from.pathname : "/";
    let activeItem ;
    if(state){
      let pathname= state.from.pathname
      if(pathname==='/'){
        activeItem = 'home'
      }
      if(pathname==='/add'){
        activeItem = 'New Question'
      }
      if(pathname==='/leaderboard'){
        activeItem = 'Leader Board'
      }
      
    }else{
      activeItem ='home'
    }
 
    this.props.dispatch(authenticate(this.state.authedUser, redirectUrl));
    this.props.dispatch(activeNavItem(activeItem));
  };
  componentDidMount(){
    console.log(this.props.location.state)

  }
  render() {

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
                options={this.props.users}
                onChange={this.handleChange}
              />
              <Button
                basic
                color="pink"
                fluid
                onClick={this.handleSubmit}
                disabled={!this.state.authedUser}
              >
                Sign In
              </Button>
            </Form.Field>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
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