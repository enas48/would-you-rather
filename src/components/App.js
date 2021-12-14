
import React, { Component, Fragment } from 'react'
import { Route, Switch} from 'react-router-dom'

import { connect } from 'react-redux'
// import { handleInitialData } from '../actions/shared'
// import LoadingBar from 'react-redux-loading-bar'
import Home from './Home'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import ProtectedRoute from './ProtectedRoute'

import NavBar from './Nav'
import Login from './Login'
import NotFound from './NotFound'
class App extends Component {
  // componentDidMount() {
  //   this.props.dispatch(handleInitialData())
  // }
  render() {
    
    return (

        <Fragment>
        {/* <LoadingBar /> */}
        <h2 className='center mb-4'>Would you rather</h2>
        <NavBar/>
      <div className='container'>
              <Switch>
                 <Route  path='/login' exact  component={Login}/>   
                 <ProtectedRoute  path='/' exact  component={Home} />
                 <ProtectedRoute  path='/add' exact component={NewQuestion} />
                 <ProtectedRoute  path='/question/:question_id' exact  component={QuestionPage} />    
                 <ProtectedRoute  path='/leaderboard' exact  component={LeaderBoard} />  
                 <Route  component={NotFound} />   
               </Switch>
      </div>
      </Fragment>

    )
  }
}


function mapStateToProps ({authedUser}) {
  return {
    authedUser,   
  }
}


export default connect( mapStateToProps)(App)