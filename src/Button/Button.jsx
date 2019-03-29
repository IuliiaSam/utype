import React from 'react';

import './Button.css'

const Button = ({disabled}) => {
    return (
        <button className="btn" disabled={disabled}>Sign up</button>
    );
};


export default Button;