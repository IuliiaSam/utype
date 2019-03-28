import React, { Component } from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import firebase from 'firebase';
import {addUserStatistics} from './server';

import Levels from '../src/Levels/Levels';
import './App.css';

import Registration from './Registration/Registration';
import LevelScreen from './components/LevelScreen/LevelScreen';
import LoginForm from './LoginForm/LoginForm';
import DevmodeLevels from './components/DevmodeLevels/DevmodeLevels';

class App extends Component {
  componentDidMount() {
    const {history} = this.props;

    // addUserStatistics({a: 12, b: 'xx'}, '7Uji9soUFbYzLsgjmi1ax2irjjo1');

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
          <Route path='/login' component={LoginForm} />
          <Route exact path="/levels" component={Levels} />
          <Route path={`/levels/:id`} component={LevelScreen} />
          <Route path={`/dev-mode/:id`} component={LevelScreen} />
          <Route exact path="/dev-mode" component={DevmodeLevels} />
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
