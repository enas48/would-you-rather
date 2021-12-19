import {React, useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import {activeNavItem} from '../actions/navItem'

const ProtectedRoute = (props) => {
  
  const { redirectPath, component, user, loggedIn, ...routeProps} = props;
  const Component = component;
  const isAccessible = Boolean(user) && loggedIn;
  useEffect(() => {
    if(!loggedIn){
      props.dispatch(activeNavItem(''))
    }
  }, [props,loggedIn]);
  return (
    <Route
      {...routeProps}
      render={props => {
        if (isAccessible) return <Component {...props} />
        
        return <Redirect to={{ pathname: "/Login", state: { from: props.location }}} />
      }}
    />
  );
};

const mapStateToProps = ({authedUser}) => {
  return { 
    loggedIn: authedUser.loggedIn, 
    user: authedUser.user 
  };
};

export default connect(mapStateToProps)(ProtectedRoute);