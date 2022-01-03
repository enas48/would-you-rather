import React,{useState, useEffect} from 'react'
import { Card, Form, Button,Divider, Message } from 'semantic-ui-react'
import  {handleAddQuestion} from '../actions/questions'
import {Redirect } from 'react-router-dom'
import {connect } from "react-redux";
import {activeNavItem} from '../actions/navItem'
import PropTypes from 'prop-types';

function NewQuestion(props) {
  const [optionOne, setOptionOne]=useState('')
  const [optionTwo, setOptionTwo]=useState('')
  const [errors,setErrors]=useState({ optOne: [],optTwo: [],})
  const [toHome, setToHome]=useState(false)
  const {dispatch}=props
  useEffect(() => {
    dispatch(activeNavItem('New Question'))
  }, [dispatch])
 
 const handleChange = (e) => {
   const {name, value} =e.target

//    switch (name) {
//     case 'optionOne': 
//     errors.optOne = 
//     value.length < 5 &&  value.length !==0
//       ? 'option One must be 5 characters long!'
//       : '';
//   break;
//   case 'optionTwo': 
//   errors.optTwo = 
//   value.length < 5 &&  value.length !==0
//     ? 'option Two must be 5 characters long!'
//     : '';
// break;
// default:
//   break;
//   }

   if(name==='optionOne'){
    setOptionOne(value );
    if(value.length < 5 &&  value.length !==0){
      errors.optOne=[]
      errors.optOne.push('option One must be 5 characters long!') 
    }
    else{
      errors.optOne=[]   
    }
    if(value === optionTwo  &&  value.length !==0){
      errors.optOne.push('option mustn\'t be the same thing')  
    } 
   
   
   }
   if(name==='optionTwo'){
    setOptionTwo(value );
    if(value.length < 5 &&  value.length !==0){
      errors.optTwo=[]
      errors.optTwo.push('option Two must be 5 characters long!') 
    }else{
      errors.optTwo=[]
    }
    if(value === optionOne  &&  value.length !==0){
      errors.optTwo.push('option mustn\'t be the same thing')  
    } 
   }
  //  if((value === optionOne || value === optionTwo) &&  (value.length !==0)){
  //   errors.optOne=[]   
  //   errors.optOne.push('option mustn\'t be the same thing') 
  //   errors.optTwo.push('option mustn\'t be the same thing') 
  // }

   setErrors(errors)
  };

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const{user, dispatch}=props
    if(validateForm(errors)) {
      dispatch(handleAddQuestion(optionOne, optionTwo, user));
      dispatch(activeNavItem("home"));
      setOptionOne('')
      setOptionTwo('')
      setToHome(true)
          }
 
 
  };

    if (toHome === true) {
      return <Redirect to="/" />;
    }
     const optOneError=errors.optOne;
     const optTwoError=errors.optTwo;
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
              {  optOneError.length!==0 &&<Message style={{display:  optOneError.length!==0 ? "block" : "none"}} size='mini'  negative>
                  <Message.Header>
                    <ul class="list">
                      {optOneError.map((m,i)=><li key={i}>{m}</li>)}
                    </ul>
                  </Message.Header>
                </Message>}

                <Divider horizontal>Or</Divider>
                <Form.Field>
                  <input
                    placeholder="Enter Option Two Text Here"
                    name="optionTwo"
                    value={optionTwo}
                    onChange={handleChange}
                  />
            {  optTwoError.length!==0 &&<Message style={{display:  optTwoError.length!==0 ? "block" : "none"}} size='mini'  negative>
                  <Message.Header>
                    <ul class="list">
                        {optTwoError.map((m,i)=><li key={i}>{m}</li>)}
                    </ul>
                    </Message.Header>
           
                </Message>}
                </Form.Field>
                <Button
                  basic
                  color="pink"
                  type="submit"
                  fluid
                  onClick={handleSubmit}
                  disabled={
                    optionOne === '' || optionTwo === '' || optOneError.length!==0 || optTwoError.length!==0
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
  

  