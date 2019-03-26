import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import firebase from 'firebase';

import Levels from '../src/Levels/Levels';
import './App.css';
import Form from './components/Form';
import Monitor from './components/Monitor/Monitor';

class App extends Component {
  componentDidMount() {
    const {history} = this.props;

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        history.push('/')
      } else {
        history.push('/login')
      }
    })
  }
  render() {
    const { levelName } = this.props;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Levels} />
          <Route path={`/:id`} component={Monitor} />
        </Switch>
        {/* <Form /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    levelName: state.selected.title
  };
}

export default withRouter(connect(mapStateToProps)(App));
