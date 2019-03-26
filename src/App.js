import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';
import { Switch, Route } from 'react-router-dom'; 
import Levels from '../src/Levels/Levels';
// import Form from './components/Form';
import Monitor from './components/Monitor/Monitor';
import './App.css';

export default  class App extends Component {
  render() { 

    return (
      <div className="App">
        {/* <LoginForm/> */}
        <Switch>
          <Route exact path="/" component={Levels} />
          <Route path={`/:id`} component={Monitor} />
        </Switch>
        {/* <Form /> */}
      </div>
    );
  }
}
 
