import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to UTYPE</h1>
        <LoginForm/>
      </div>
    );
  }
}

export default App;
