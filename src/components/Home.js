import React, {  useEffect} from 'react'
import { Tab } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from "./UnansweredQuestion";
import {activeNavItem} from '../actions/navItem'

function Home(props){
  const {dispatch}=props
  useEffect(() => {
dispatch(activeNavItem('home'))
}, [dispatch])

    const panes = [
      {
        menuItem: 'Unanswered Questions',
        render: () => <Tab.Pane attached={false}><UnansweredQuestion/></Tab.Pane>,
      },
      {
        menuItem: 'Answered Questions',
        render: () => <Tab.Pane attached={false}><AnsweredQuestion/></Tab.Pane>,
      },

    ]
  return (
  <div className="col-lg-6 col-md-8 m-auto home pb-4">
      <Tab menu={{ attached: false }} panes={panes} />
  </div> 
  )
}


export default connect()(Home)
  