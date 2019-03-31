import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Registration.css';

import { inputData, clearInputs } from '../redux/actions/inputActions';
import { createUserWithEmailAndPassword } from '../server';
import Button from '../Button/Button';

const Registration = ({ readInputValue, inputs, clearInputs }) => {
  const regular = {
    name: /^[A-Za-z0-9_]{4,16}$/,
    email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
    password: /^[A-Za-z0-9]{4,16}$/
    // password: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{5,})\S$/,
  };

  let nameOK = regular.name.test(inputs.name);
  let emailOK = regular.email.test(inputs.email);
  let passOK = regular.password.test(inputs.password);
  let confpassOK = inputs.password === inputs.confirm_password;

  let isAllInputsValueCorrect = emailOK && nameOK && passOK && confpassOK;

  return (
    <div className="Registration">
      <form
        className="Registration-form flex-column center-box shadow max-width-500 padding-all-25 margin-top-50"
        onSubmit={e => {
          e.preventDefault();
          createUserWithEmailAndPassword(
            inputs.email,
            inputs.password,
            inputs.name
          );
        }}
      >
        <h2 className="h2 text-center">Sign Up</h2>

        <div
          className={
            inputs.email.length === 0
              ? 'Registration-form__group'
              : emailOK
              ? 'Registration-form__group success'
              : 'Registration-form__group error'
          }
        >
          {/* <div className="input-conteiner"> */}
            <input
              type="email"
              name="email"
              className="Registration-form__input"
              placeholder="Email"
              onChange={readInputValue}
            />
            {inputs.email.length === 0 ? null : emailOK ? null : (
              <small className='Registration-form__error'>Invalid email address</small>
            )}
          </div>
        {/* </div> */}

        <div
          className={
            inputs.name.length === 0
              ? 'Registration-form__group'
              : nameOK
              ? 'Registration-form__group success'
              : 'Registration-form__group error'
          }
        >
          {/* <div className="input-conteiner"> */}
            <input
              type="text"
              name="name"
              className="Registration-form__input"
              placeholder="Username"
              onChange={readInputValue}
            />
            {inputs.name.length === 0 ? null : nameOK ? null : (
              <small className='Registration-form__error'>
                Must be at least 4 characters long (only letters or numbers)

              </small>
            )}
          </div>
        {/* </div> */}

        <div
          className={
            inputs.password.length === 0
              ? 'Registration-form__group'
              : passOK
              ? 'Registration-form__group success'
              : 'Registration-form__group error'
          }
        >
          {/* <div className="input-conteiner"> */}
            <input
              type="password"
              name="password"
              className="Registration-form__input"
              placeholder="Password"
              aria-autocomplete="list"
              onChange={readInputValue}
            />
            {inputs.password.length === 0 ? null : passOK ? null : (
              <small className='Registration-form__error'>
                Must be at least 4 characters long (only letters or numbers)
              </small>
            )}
          </div>
        {/* </div> */}

        <div
          className={
            !passOK || inputs.confirm_password.length === 0
              ? 'Registration-form__group'
              : confpassOK
              ? 'Registration-form__group success'
              : 'Registration-form__group error'
          }
        >
          {/* <div className="input-conteiner"> */}
            <input
              type="password"
              name="confirm_password"
              className="Registration-form__input"
              placeholder="Confirm password"
              onChange={readInputValue}
            />
            {!passOK ||
            inputs.confirm_password.length === 0 ? null : confpassOK ? null : (
              <small className='Registration-form__error'>Password does not match the confirm password.</small>
            )}
          </div>
        {/* </div> */}

        <Button disabled={!isAllInputsValueCorrect} />

        <p className="last-par text-center">
          <span>Already have an account? </span>
          <NavLink className="link" to="/login" onClick={clearInputs}>
            Sign In
          </NavLink>
        </p>
      </form>
    </div>
  );
};

const MSTP = state => ({
  inputs: state.inputs,
});

const MDTP = dispatch => ({
  readInputValue: e => {
    dispatch(inputData(e));
  },
  clearInputs: () => dispatch(clearInputs()),
});

export default connect(
  MSTP,
  MDTP
)(Registration);
