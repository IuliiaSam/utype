import React from 'react';
import {connect} from 'react-redux';

import './Registration.css'

import {readInputValue} from '../redux/actions/inputValueAction';
import Button from '../Button/Button';

const Registration = ({readInputValue}) => {
    return (
        <form className="form flex-column center-box shadow max-width-500 padding-all-25" >

            <h1 className="text-center">Sing Up</h1>

            <div className="form-group flex-end">
                <label for="email" class="input-label"><span>Email</span></label>
                <input type="email" name="email" class="form-input" placeholder="Email" onChange={readInputValue}></input>
            </div>

            <div className="form-group flex-end">
                <label for="username" class="input-label"><span>Username</span></label>
                <input type="text" name="username" class="form-input" placeholder="Username" onChange={readInputValue}></input>
            </div>

            <div className="form-group flex-end">
                <label for="password" class="input-label"><span>Password</span></label>
                <input type="password" name="password" class="form-input" placeholder="Password" aria-autocomplete="list" onChange={readInputValue}></input>
            </div>
                 
            <div className="form-group flex-end">
                <label for="confirm_password" class="input-label"><span>Confirm password</span></label>
                <input type="password" name="confirm_password" class="form-input" placeholder="Confirm password" onChange={readInputValue}></input>
            </div>

            <Button />

            <small className="text-center">
                <span>Already have an account?</span>
                <a href=""><span>Sign In</span></a>
            </small>
        </form>
    );
};



const MDTP = (dispatch) => ({ 
    readInputValue: e => { 
        dispatch(readInputValue(e));
    },
})

export default connect(null, MDTP)(Registration);