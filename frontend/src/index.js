import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import AddTutorial from './components/AddTutorial';
import EditTutorial from './components/EditTutorial';
import './index.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/addTutorial" component={AddTutorial} />
        <Route path="/editTutorial" component={EditTutorial} />
    </Router>,
  document.getElementById('root')
);
