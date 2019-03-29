import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Registration.css';

import { inputData } from '../redux/actions/inputActions';
import { createUserWithEmailAndPassword } from '../server';
import Button from '../Button/Button';

const Registration = ({readInputValue, inputs}) => {
    const regular = {
        name: /^[A-Za-z0-9_]{4,16}$/,
        email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
        password:/^[A-Za-z0-9]{4,16}$/,
        // password: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{5,})\S$/,
    };

    let nameOK = regular.name.test(inputs.name);
    let emailOK = regular.email.test(inputs.email);
    let passOK = regular.password.test(inputs.password)  ;
    let confpassOK = inputs.password === inputs.confirm_password;

    let isAllInputsValueCorrect = emailOK && nameOK && passOK && confpassOK;      

    return (
        <div className="Form-wrapper">
            <form 
                className="Form shadow"
                onSubmit={e => {
                    e.preventDefault();
                    createUserWithEmailAndPassword(
                        inputs.email,
                        inputs.password,
                        inputs.name
                        );
                    }}
            >
                <h2 className="Form__title">Sign Up</h1>
                <label className={inputs.email.length === 0 ? "Form-label" : emailOK ? "Form-label success" : "Form-label error"}>
                    <input 
                        type="email" 
                        name="email" 
                        className="Form__input" 
                        placeholder="Email" 
                        onChange={readInputValue}
                        autoFocus
                    />
                    {inputs.email.length === 0 ? null : emailOK ? null : <small>Invalid email address.</small>}
                </label>
                <label className={inputs.name.length === 0 ? "Form-label" : nameOK ? "Form-label success" : "Form-label error"}>
                    <input 
                        type="text" 
                        name="name" 
                        className="Form__input" 
                        placeholder="Username" 
                        onChange={readInputValue}
                    />
                    {inputs.name.length === 0 ? null : nameOK ? null : <small>Username must be at least 4 characters long and contain only letters and numbers.</small>}
                </label>
                <label className={inputs.password.length === 0 ? "Form-label" : passOK ? "Form-label success" : "Form-label error"}>
                    <input 
                        type="password" 
                        name="password" 
                        className="Form__input" 
                        placeholder="Password" 
                        aria-autocomplete="list" 
                        onChange={readInputValue}
                    />
                    {inputs.password.length === 0 ? null : passOK ? null : <small>Password must be at least 4 characters long and contain only letters and numbers.</small>}
                </label>
                <label className={!passOK || inputs.confirm_password.length === 0 ? "Registration-form__group" : confpassOK ? "Registration-form__group success" : "Registration-form__group error"}>
                    <input 
                        type="password" 
                        name="confirm_password" 
                        className="Form__input" 
                        placeholder="Confirm password" 
                        onChange={readInputValue}
                    />
                    {!passOK || inputs.confirm_password.length === 0 ? null : confpassOK ? null : <small>Password does not match the confirm password.</small>}
                </label>
                <Button disabled={!isAllInputsValueCorrect}/>
                <small className="text-center">
                    <span>Already have an account? </span>
                    <NavLink className="link" to="/login">Sign In</NavLink>
                </small>
            </form>
        </div>
    );
};

const MSTP = state => ({
  inputs: state.inputs
});

const MDTP = dispatch => ({
  readInputValue: e => {
    dispatch(inputData(e));
  }
});

export default connect(MSTP, MDTP) (Registration);
