import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Levels from '../src/Levels/Levels';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Levels />
      </div>
    );
  }
}

export default App;
