import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Levels from '../src/Levels/Levels';
import './App.css';
import Form from './components/Form';
import Monitor from './components/Monitor/Monitor';

class App extends Component {
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

export default connect(mapStateToProps)(App);
