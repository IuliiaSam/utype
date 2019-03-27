import React from 'react';
import {NavLink} from 'react-router-dom';
import svg from './cross.svg';
import {signOut} from '../server';

import './Header.css';
const Header = () => {
    return (
        <header className='header'>
            <div className='wrap'>
                <img className='logo' src="http://www.abaxsoft.com/blog/assets/uploads/2016/07/business-logo-design.jpg" alt="logo"/> 
                <ul className='headerNavMenu'>
                    <li className='headerNavMenuItem'><NavLink to='/levels'>Home</NavLink></li>
                    <li className='headerNavMenuItem'><NavLink to='/tutorial'>Stat</NavLink></li>
                    <li className='headerNavMenuItem'><NavLink to='/main'>Developer</NavLink></li>    
                </ul>
                <div>

                </div>
                <div className='identyMenu'>
                    
                 <NavLink to='/login' onClick={signOut} className='identyMenuItem'>Sign out</NavLink>
                </div>
           </div>
        </header>
    );
};

export default Header;