import React from 'react';

import './MonitorHeader.css';

const MonitorHeader = () => {
  return (
    <ul className='MonitorHeader'>
      <li className='MonitorHeader__item'><p>Accuracy</p><p>45<span>%</span></p></li>
      <li className='MonitorHeader__item'><p>Speed</p><p>4<span>WPM</span></p></li>
      <li className='MonitorHeader__item'><p>20</p><span>CPM</span></li>
      <li className='MonitorHeader__item'><p>Time</p><p>100<span>s</span></p></li>
      <li className='MonitorHeader__item'><p>Errors</p><p>6/<span>11</span></p></li>
    </ul>
  );
};

export default MonitorHeader;