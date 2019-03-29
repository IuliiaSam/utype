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
        password:/^[A-Za-z0-9]{4,16}$/,
        // password: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{5,})\S$/,
    };

    let nameOK = regular.name.test(inputs.name);
    let emailOK = regular.email.test(inputs.email);
    let passOK = regular.password.test(inputs.password)  ;
    let confpassOK = inputs.password === inputs.confirm_password;

    let isAllInputsValueCorrect = emailOK && nameOK && passOK && confpassOK;      

    return (
        <form className="Registration-form flex-column center-box shadow max-width-500 padding-all-25 margin-top-50" onSubmit={e => { e.preventDefault(); createUserWithEmailAndPassword(inputs.email, inputs.password, inputs.name)}} >

            <h1 className="text-center">Sign Up</h1>

            <div className={inputs.email.length === 0 ? "Registration-form__group" : emailOK ? "Registration-form__group success" : "Registration-form__group error"}>
                <label htmlFor="email"className="input-label"><span>Email</span></label>
                <div className="input-conteiner">
                    <input type="email" name="email" className="Registration-form__input" placeholder="Email" onChange={readInputValue}></input>
                    {inputs.email.length === 0 ? null : emailOK ? null : <small>Invalid email address.</small>}
                </div>
            </div>

            <div className={inputs.name.length === 0 ? "Registration-form__group" : nameOK ? "Registration-form__group success" : "Registration-form__group error"}>
                <label htmlFor="name"className="input-label"><span>Username</span></label>
                <div className="input-conteiner">
                    <input type="text" name="name" className="Registration-form__input" placeholder="Username" onChange={readInputValue}></input>
                    {inputs.name.length === 0 ? null : nameOK ? null : <small>Username must be at least 4 characters long and contain only letters and numbers [a-z, A-Z, 0-9].</small>}
                </div>
            </div>

            <div className={inputs.password.length === 0 ? "Registration-form__group" : passOK ? "Registration-form__group success" : "Registration-form__group error"}>
                <label htmlFor="password"className="input-label"><span>Password</span></label>
                <div className="input-conteiner">
                    <input type="password" name="password" className="Registration-form__input" placeholder="Password" aria-autocomplete="list" onChange={readInputValue}></input>
                    {inputs.password.length === 0 ? null : passOK ? null : <small>Password must be at least 4 characters long and contain only letters and numbers [a-z, A-Z, 0-9].</small>}
                </div>
            </div>
                 
            <div className={!passOK || inputs.confirm_password.length === 0 ? "Registration-form__group" : confpassOK ? "Registration-form__group success" : "Registration-form__group error"}>
                <label htmlFor="confirm_password"className="input-label"><span>Confirm password</span></label>
                <div className="input-conteiner">
                    <input type="password" name="confirm_password" className="Registration-form__input" placeholder="Confirm password" onChange={readInputValue}></input>
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