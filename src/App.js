import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Levels from '../src/Levels/Levels';
import './App.css';
import Form from './components/Form';
import Monitor from './components/Monitor/Monitor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        {/* <Form /> */}
        <Monitor />

        <Levels />
      </div>
    );
  }
}

export default App;
