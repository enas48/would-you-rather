import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {createStore,  compose} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import history from "./components/history";
import { Router} from 'react-router-dom'

import StateCacheStorage from "./utils/StateCacheStorage";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

  
  const initialState = StateCacheStorage.get("APP_STATE");
  const composeEnhancers = compose;
const store =createStore(reducer, initialState,composeEnhancers(middleware));
store.subscribe(() => {
    StateCacheStorage.set("APP_STATE", store.getState());
  });

ReactDOM.render(
<Provider store={store} >
<Router history={history}>
    <App />
 </Router>
</Provider>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
