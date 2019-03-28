import React from 'react';
import {connect} from 'react-redux';
import Speedometer from '../Speedometer/Speedometer';

import './MonitorHeader.css';

const MonitorHeader = ({inputTracking}) => {
  return (
    <ul className='MonitorHeader'>
      <li className='MonitorHeader__item'><p>Accuracy</p><p>{inputTracking.accuracy}<span>%</span></p></li>
      <li className='MonitorHeader__item'><p>Speed</p><p>{inputTracking.wordsPerMinute}<span>WPM</span></p></li>
      <li className='MonitorHeader__item'><p>{inputTracking.charactersPerMinute}</p><span>CPM</span></li>
      <li className='MonitorHeader__item'><Speedometer charactersPerMinute={inputTracking.charactersPerMinute}/></li>
      <li className='MonitorHeader__item'><p>Errors</p><p>{inputTracking.numberOfErrors}/<span>{inputTracking.totalCharacters}</span></p></li>
    </ul>
  );
};

function MSTP (state) {
  return {
    inputTracking: state.inputTracking,
  }
}

export default connect (MSTP, null)(MonitorHeader);
