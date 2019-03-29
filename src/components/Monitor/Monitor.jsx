import React from 'react';
import MonitorHeader from '../MonitorHeader/MonitorHeader';
import InputArea from '../InputArea/InputArea';

import './Monitor.css';

const Monitor = ({inputTracking}) => {
  return (
    <div className='Monitor'>
      <MonitorHeader inputTracking={inputTracking}/>
      <InputArea />
    </div>
  );
};

export default Monitor;