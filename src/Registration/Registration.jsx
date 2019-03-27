import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Registration.css';

import { inputData } from '../redux/actions/inputActions';
import { createUserWithEmailAndPassword } from '../server';
import Button from '../Button/Button';

const Registration = ({ readInputValue, inputs }) => {
  return (
    <form
      className="form flex-column center-box shadow max-width-500 padding-all-25"
      onSubmit={e => {
        e.preventDefault();
        createUserWithEmailAndPassword(
          inputs.email,
          inputs.password,
          inputs.name
        );
      }}
    >
      <h1 className="text-center">Sign Up</h1>

      <div className="form-group flex-end">
        <label for="email" class="input-label">
          <span>Email</span>
        </label>
        <input
          type="email"
          name="email"
          class="form-input"
          placeholder="Email"
          onChange={readInputValue}
        />
      </div>

      <div className="form-group flex-end">
        <label for="name" class="input-label">
          <span>Username</span>
        </label>
        <input
          type="text"
          name="name"
          class="form-input"
          placeholder="Username"
          onChange={readInputValue}
        />
      </div>

      <div className="form-group flex-end">
        <label for="password" class="input-label">
          <span>Password</span>
        </label>
        <input
          type="password"
          name="password"
          class="form-input"
          placeholder="Password"
          aria-autocomplete="list"
          onChange={readInputValue}
        />
      </div>

      <div className="form-group flex-end">
        <label for="confirm_password" class="input-label">
          <span>Confirm password</span>
        </label>
        <input
          type="password"
          name="confirm_password"
          class="form-input"
          placeholder="Confirm password"
          onChange={readInputValue}
        />
      </div>

      <Button />

      <small className="text-center">
        <span>Already have an account?</span>
        <NavLink to="/login">Sign In</NavLink>
      </small>
    </form>
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

export default connect(
  MSTP,
  MDTP
)(Registration);
