import React, { useEffect } from 'react';
import Monitor from '../Monitor/Monitor';
import Keyboard from '../Keyboard/Keyboard';
import { connect } from 'react-redux';
import Header from '../../Header/Header';
import { getKeys } from '../../redux/actions/getKeysAction';
import keysArray from '../../redux/reducers/keysArrayReducer';

import './LevelScreen.css';

const LevelScreen = ({
  inputTracking,
  clearStatistics,
  clearUserArr,
  match,
  selected,
  strArr,
  counter,
  history,
  getKeys,
  keysArray,
}) => {
  // useEffect(() => {clearStatistics(); clearUserArr(selected)}, [match]);
  // console.log(match.path);

  if (strArr.length === counter) {
    history.push('/result');
  }

  useEffect(() => {getKeys()}, [match]);

  return (
    <div
      className={
        match.path.includes('dev-mode')
          ? 'LevelScreen LevelScreen--dev'
          : 'LevelScreen'
      }
    >
      <Header
        themeMode={
          match.path.includes('dev-mode') ? 'header--dev header' : 'header'
        }
      />
      <div className="computer-wrapper">
        <Monitor inputTracking={inputTracking} />
        <Keyboard />
      </div>
      {/* <FinalComponent /> */}
    </div>
  );
};

function MSTP(state) {
  return {
    inputTracking: state.inputTracking,
    selected: state.selected,
    strArr: state.userArr,
    counter: state.counter,
    keysArray: state.keysArray,
  };
}

function MDTP(dispatch) {
  return {
    getKeys: keys => dispatch(getKeys(keys))
  };
}

export default connect(
  MSTP,
  MDTP
)(LevelScreen);
