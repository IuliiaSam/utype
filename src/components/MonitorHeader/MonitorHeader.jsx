import React from 'react';
import { connect } from 'react-redux';
import Speedometer from '../Speedometer/Speedometer';

import './MonitorHeader.css';

const MonitorHeader = ({ inputTracking }) => {
  return (
    <ul className="MonitorHeader">
      <li className="MonitorHeader__item">
        <p  className='MonitorHeader__number'>
          {inputTracking.accuracy}
          <span>%</span>
        </p>
        <p className='MonitorHeader__label'>Accuracy</p>
      </li>
      <li className="MonitorHeader__item">
        <p  className='MonitorHeader__number'>
          {inputTracking.wordsPerMinute}
        </p>
          <p className='MonitorHeader__label'>Words per minute</p>
        {/* <p className='MonitorHeader__label MonitorHeader__label--speed'> - Speed - </p> */}
      </li>
      <li className="MonitorHeader__item">
        <p  className='MonitorHeader__number'>{inputTracking.charactersPerMinute}</p>
        <p className='MonitorHeader__label'>Chars per minute</p>
      </li>
      <li className="MonitorHeader__item">
        <Speedometer charactersPerMinute={inputTracking.charactersPerMinute} />
      </li>
      <li className="MonitorHeader__item">
        <p  className='MonitorHeader__number'>
          {inputTracking.numberOfErrors}/
          <span>{inputTracking.totalCharacters}</span>
        </p>
        <p className='MonitorHeader__label'>Errors</p>
      </li>
    </ul>
  );
};

function MSTP(state) {
  return {
    inputTracking: state.inputTracking
  };
}

export default connect(
  MSTP,
  null
)(MonitorHeader);
