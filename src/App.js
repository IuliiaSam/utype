import React, { Component } from 'react';
import Header from './Header/Header';
import {Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  state={
    isLogedIn:false,
  }
  render() {
    const {isLogedIn} = this.state
    return (
      <div className="App">
        <Header isLogedIn={isLogedIn}/>
        <Switch>
          <Route exact path='/'/>
          <Route path='/main'/>
          <Route path='/tutorial'/>
        </Switch>
      </div>
    );
  }
}

export default App;
