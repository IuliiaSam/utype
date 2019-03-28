import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Registration.css';

import { inputData } from '../redux/actions/inputActions';
import { createUserWithEmailAndPassword } from '../server';
import Button from '../Button/Button';

const Registration = ({ readInputValue, inputs }) => {
  return (
    <div className="Registration">
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
        <h2 className=" h2 text-center">Sign Up</h2>

        {/* <div className="form-group flex-end">
          <label class="input-label">
            Email */}
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
              onChange={readInputValue}
            />
          {/* </label>
        </div> */}

        {/* <div className="form-group flex-end">
          <label class="input-label">
            Username */}
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Username"
              onChange={readInputValue}
            />
          {/* </label>
        </div> */}

        {/* <div className="form-group flex-end">
          <label class="input-label">
            Password */}
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Password"
              aria-autocomplete="list"
              onChange={readInputValue}
            />
          {/* </label>
        </div> */}

        {/* <div className="form-group flex-end">
          <label class="input-label">
            Confirm password */}
            <input
              type="password"
              name="confirm_password"
              className="form-input"
              placeholder="Confirm password"
              onChange={readInputValue}
            />
          {/* </label>
        </div> */}

        <Button />

        <p className="text-center">
          <span>Already have an account? </span>
          <NavLink className="link" to="/login">
            Sign In
          </NavLink>
        </p>
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

export default connect(
  MSTP,
  MDTP
)(Registration);
