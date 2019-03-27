import React, { Component } from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import firebase from 'firebase';

import Levels from '../src/Levels/Levels';
import './App.css';

import Registration from './Registration/Registration';
import LevelScreen from './components/LevelScreen/LevelScreen';

class App extends Component {
  componentDidMount() {
    const {history} = this.props;

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        console.log("Logined");
        history.push('/levels')
      } else {
        console.log("Not logined");
        history.push('/login')
      }
    })
  }
  render() {
    const { levelName } = this.props;

    return (
      <div className="App">
      {/* <Validation/> */}
        <Switch>
          <Route path='/register' component={Registration} />
          {/* <Route path='/login' component={Login} /> */}
          <Route exact path="/levels" component={Levels} />
          <Route path={`/levels/:id`} component={LevelScreen} />
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
