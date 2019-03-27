import React from 'react';
import Monitor from '../Monitor/Monitor';
import Keyboard from '../Keyboard/Keyboard';

import './LevelScreen.css';

const LevelScreen = () => {
  return (
    <div className='LevelScreen'>
      <Monitor />
      <Keyboard />
    </div>
  );
};

export default LevelScreen;