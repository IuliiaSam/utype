import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Monitor from '../Monitor/Monitor';
import Keyboard from '../Keyboard/Keyboard';

import './LevelScreen.css';
import Header from '../../Header/Header';
// import {clearStatistics} from '../../redux/actions/clearStatisticsAction';
// import {clearUserArr} from '../../redux/actions/userArrAction';

const LevelScreen = ({inputTracking, clearStatistics, clearUserArr, match, selected}) => {
  // console.log('Hello match', match)
  // useEffect(() => {clearStatistics(); clearUserArr(selected)}, [match]);
  
  return (
    <div className="LevelScreen">
      <Header />
      <Monitor inputTracking={inputTracking} />
      <Keyboard />
    </div>
  );
};

function MSTP (state) {
  return {
    inputTracking: state.inputTracking,
    selected: state.selected,
  }
}

function MDTP (dispatch) {
  return {
    // clearStatistics: () => dispatch(clearStatistics()),
    // clearUserArr: (selected) => dispatch(clearUserArr(selected)),
  }
}

export default connect (MSTP, MDTP)(LevelScreen);
