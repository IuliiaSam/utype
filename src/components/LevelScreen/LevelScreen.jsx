import React from 'react';
import Monitor from '../Monitor/Monitor';
import Keyboard from '../Keyboard/Keyboard';

import './LevelScreen.css';
import Header from '../../Header/Header';

const LevelScreen = () => {
  return (
    <div className="LevelScreen">
      <Header />
      <Monitor />
      <Keyboard />
    </div>
  );
};

export default LevelScreen;
