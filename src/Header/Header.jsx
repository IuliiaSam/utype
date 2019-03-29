import React from 'react';
import { NavLink } from 'react-router-dom';
import svg from './cross.svg';
import { signOut } from '../server';

import './Header.css';
const Header = ({themeMode}) => {
  return (
    <header className={themeMode}>
      <div className="wrap">
        <NavLink className="Header__link" to="/levels">
          <img
            className="logo"
            src="https://i.ibb.co/jMrD5tt/logo.png"
            alt="logo"
          />
        </NavLink>

        <ul className="headerNavMenu">
          <li className="headerNavMenuItem">
            <NavLink className="Header__link" to="/levels">
              Home
            </NavLink>
          </li>
          <li className="headerNavMenuItem">
            <NavLink className="Header__link" to="/statistics">
              Statistics
            </NavLink>
          </li>
          <li className="headerNavMenuItem">
            <NavLink className="Header__link" to="/dev-mode">
              Dev Mode
            </NavLink>
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
