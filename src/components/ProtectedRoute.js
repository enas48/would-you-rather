import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

const ProtectedRoute = (props) => {
  const { redirectPath, component, user, loggedIn, ...routeProps} = props;
  const Component = component;
  const isAccessible = Boolean(user) && loggedIn;

  return (
    <Route
      {...routeProps}
      render={props => {
        if (isAccessible) return <Component {...props} />;
        return <Redirect to={{ pathname: redirectPath || "/Login" }} />;
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