import React from 'react';
import {connect} from 'react-redux';

import './Registration.css'

import {inputData} from '../redux/actions/inputActions';
import {createUserWithEmailAndPassword} from '../server';
import Button from '../Button/Button';

const Registration = ({readInputValue, inputs}) => {
    const regular = {
        name: /^[A-Za-z0-9_]{4,16}$/,
        email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
        password: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{5,})\S$/,
    };

    let nameOK = regular.name.test(inputs.name);
    let emailOK = regular.email.test(inputs.email);
    let passOK = regular.password.test(inputs.password)  ;
    let confpassOK = inputs.password === inputs.confirm_password;

    let isAllInputsValueCorrect = emailOK && nameOK && passOK && confpassOK;      

    return (
        <form className="form flex-column center-box shadow max-width-500 padding-all-25 margin-top-50" onSubmit={e => { e.preventDefault(); createUserWithEmailAndPassword(inputs.email, inputs.password, inputs.name)}} >

            <h1 className="text-center">Sign Up</h1>

            <div className={inputs.email.length === 0 ? "form-group" : emailOK ? "form-group success" : "form-group error"}>
                <label htmlFor="email"className="input-label"><span>Email</span></label>
                <div className="input-conteiner">
                    <input type="email" name="email" className="form-input" placeholder="Email" onChange={readInputValue}></input>
                    {inputs.email.length === 0 ? null : emailOK ? null : <small>Invalid email address.</small>}
                </div>
            </div>

            <div className={inputs.name.length === 0 ? "form-group" : nameOK ? "form-group success" : "form-group error"}>
                <label htmlFor="name"className="input-label"><span>Username</span></label>
                <div className="input-conteiner">
                    <input type="text" name="name" className="form-input" placeholder="Username" onChange={readInputValue}></input>
                    {inputs.name.length === 0 ? null : nameOK ? null : <small>Username must be at least 4 characters long and contain only letters and numbers [a-z, A-Z, 0-9].</small>}
                </div>
            </div>

            <div className={inputs.password.length === 0 ? "form-group" : passOK ? "form-group success" : "form-group error"}>
                <label htmlFor="password"className="input-label"><span>Password</span></label>
                <div className="input-conteiner">
                    <input type="password" name="password" className="form-input" placeholder="Password" aria-autocomplete="list" onChange={readInputValue}></input>
                    {inputs.password.length === 0 ? null : passOK ? null : <small>Password must be at least 6 characters long and contain at least 1 uppercase letter, 1 lowercase letter and 1 number.</small>}
                </div>
            </div>
                 
            <div className={!passOK || inputs.confirm_password.length === 0 ? "form-group" : confpassOK ? "form-group success" : "form-group error"}>
                <label htmlFor="confirm_password"className="input-label"><span>Confirm password</span></label>
                <div className="input-conteiner">
                    <input type="password" name="confirm_password" className="form-input" placeholder="Confirm password" onChange={readInputValue}></input>
                    {!passOK || inputs.confirm_password.length === 0 ? null : confpassOK ? null : <small>Password does not match the confirm password.</small>}
                </div>
            </div>

            <Button disabled={!isAllInputsValueCorrect}/>

            <small className="text-center">
                <span>Already have an account?</span>
                <a href=""><span>Sign In</span></a>
            </small>
        </form>
    );
};

const MSTP = state => ({
    inputs: state.inputs,
})

const MDTP = (dispatch) => ({ 
    readInputValue: e => { 
        dispatch(inputData(e));
    },
})

export default connect(MSTP, MDTP) (Registration);