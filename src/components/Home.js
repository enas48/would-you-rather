import React, { Component} from 'react'
import { Tab } from 'semantic-ui-react'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from "./UnansweredQuestion";
 class Home extends Component{
   render(){
    const panes = [
      {
        menuItem: 'Unanswered Questions',
        render: () => <Tab.Pane attached={false}> < UnansweredQuestion/></Tab.Pane>,
      },
      {
        menuItem: 'Answered Questions',
        render: () => <Tab.Pane attached={false}><AnsweredQuestion/></Tab.Pane>,
      },

    ]
  return (
  <div className="col-md-8 m-auto">
      <Tab menu={{ attached: false }} panes={panes} />
  </div> 
  )
}
} 


export default Home
  