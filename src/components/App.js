
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// import LoadingBar from 'react-redux-loading-bar'
import Home from './Home'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import NavBar from './Nav'
import Login from './Login'
class App extends Component {
  componentDidMount() {
  
    this.props.dispatch(handleInitialData())

  }
  render() {
    
    return (
      <Router>
        <Fragment>
        {/* <LoadingBar /> */}
        <h2 className='center mb-4'>Would you rather</h2>
        <NavBar/>
      <div className='container'>

        {this.props.authedUser === null
          ? <Login/>
          : <div>
                <Route path='/' exact component={Home} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/question/:question_id' component={QuestionPage} />    
                <Route path='/leaderboard' component={LeaderBoard} />    
                <Route path='/login' component={Login} />    
            </div>}
      </div>
      </Fragment>
      </Router>
    )
  }
}


function mapStateToProps ({authedUser}) {
  return {
    authedUser,
   
  }
}


export default connect( mapStateToProps)(App)