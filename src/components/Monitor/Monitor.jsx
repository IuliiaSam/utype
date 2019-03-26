import React from 'react';
import MonitorHeader from '../MonitorHeader/MonitorHeader';
import InputArea from '../InputArea/InputArea';

import './Monitor.css';

const Monitor = () => {
  return (
    <div className='Monitor'>
      <MonitorHeader />
      <InputArea />
    </div>
  );
};

export default Monitor;