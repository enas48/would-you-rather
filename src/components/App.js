import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

import Home from "./Home";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import LeaderBoard from "./LeaderBoard";
import NavBar from "./Nav";
import Login from "./Login";
import NotFound from "./NotFound";

import ProtectedRoute from "./ProtectedRoute";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: "#e03997" }} />
        <h2 className="center my-4">Would you rather!</h2>
        <NavBar />
        <div className="container mt-2">
          <Switch>
            <Route path="/login" exact component={Login} />
            <ProtectedRoute path="/" exact component={Home} />
            <ProtectedRoute path="/add" exact component={NewQuestion} />  
            <ProtectedRoute path="/leaderboard" exact component={LeaderBoard} />
            <ProtectedRoute  path="/questions/:id"  exact component={QuestionPage}/>       
            <ProtectedRoute path="/404" exact component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(App));
