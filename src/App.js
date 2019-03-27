import React, { Component } from 'react';
import {connect} from 'react-redux';
import inputAction from './redux/actions/inputAction';
import './App.css';
import Speedometer from './components/Speedometer/Speedometer';

class App extends Component {

  render() {
    const {inputTracking, inputAction, pecherskiyArr} = this.props;
    return (

      <div className="App">

        <ul>
          <li>
            <p>characters per minute (last word): {inputTracking.charactersPerMinute}</p>
          </li>
          <li>
            <p>characters per minute (average speed): {inputTracking.averageSpeed}</p>
          </li>
          <li>
            <p>words per minute: {inputTracking.wordsPerMinute}</p>
          </li>
          <li>
            <p>number of errors: {inputTracking.numberOfErrors}</p>
          </li>
          <li>
            <p>percent of errors: {inputTracking.percentOfErrors}</p>
          </li>
        </ul>
        <br/>

        <div id="input" tabIndex="-1" onKeyDown={e=>inputAction(e, pecherskiyArr)}>{inputTracking.inputString}
        </div>

        <Speedometer charactersPerMinute={inputTracking.charactersPerMinute}/>

      </div>
    );
  }
}

function reducerProps (state) {
  return {
      inputTracking: state.inputTracking,
      pecherskiyArr: state.pecherskiyArr,
  }
}

function actionProps (dispatch) {
  return {
    inputAction: function(e, pecherskiyArr) { dispatch(inputAction(e, pecherskiyArr)) },
  }
}

export default connect (reducerProps, actionProps) (App);