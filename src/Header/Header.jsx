import React from 'react';
import { NavLink } from 'react-router-dom';
import svg from './cross.svg';
import { signOut } from '../server';

import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <img
          className="logo"
          src="https://files.slack.com/files-pri/TCJ0ZHEGL-FHCV04Z8X/logo.png"
          alt="logo"
        />
        <ul className="headerNavMenu">
          <li className="headerNavMenuItem">
            <NavLink className="Header__link" to="/levels">Home</NavLink>
          </li>
          <li className="headerNavMenuItem">
            <NavLink className="Header__link" to="/tutorial">Stat</NavLink>
          </li>
          <li className="headerNavMenuItem">
            <NavLink className="Header__link" to="/main">Developer</NavLink>
          </li>
        </ul>
        <div />
        <div className="identyMenu">
          <NavLink to="/login" onClick={signOut} className="identyMenuItem">
            Sign out
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
