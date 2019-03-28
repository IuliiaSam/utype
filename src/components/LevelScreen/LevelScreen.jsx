import React from 'react';
import { connect } from 'react-redux';

import Monitor from '../Monitor/Monitor';
import Speedometer from '../Speedometer/Speedometer';
import Keyboard from '../Keyboard/Keyboard';

import './LevelScreen.css';
import Header from '../../Header/Header';

const LevelScreen = ({inputTracking}) => {
  return (
    <div className="LevelScreen">
      <Header />
      <Monitor inputTracking={inputTracking} />
      <Speedometer charactersPerMinute={inputTracking.charactersPerMinute}/>
      <Keyboard />
    </div>
  );
};

function MSTP (state) {
  return {
    inputTracking: state.inputTracking,
  }
}

export default connect (MSTP, null)(LevelScreen);
