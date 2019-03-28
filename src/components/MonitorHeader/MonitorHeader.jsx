import React from 'react';

import './MonitorHeader.css';

const MonitorHeader = ({inputTracking}) => {
  return (
    <ul className='MonitorHeader'>
      <li className='MonitorHeader__item'><p>Accuracy</p><p>{inputTracking.accuracy}<span>%</span></p></li>
      <li className='MonitorHeader__item'><p>Speed</p><p>{inputTracking.wordsPerMinute}<span>WPM</span></p></li>
      <li className='MonitorHeader__item'><p>{inputTracking.charactersPerMinute}</p><span>CPM</span></li>
      <li className='MonitorHeader__item'><p>Time</p><p>100<span>s</span></p></li>
      <li className='MonitorHeader__item'><p>Errors</p><p>{inputTracking.numberOfErrors}/<span>{inputTracking.totalCharacters}</span></p></li>
    </ul>
  );
};

export default MonitorHeader;