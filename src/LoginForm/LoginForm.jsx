import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './LoginForm.css';

import { signInWithEmailAndPassword } from '../server';

import { inputData } from '../redux/actions/LoginInputActions';
import { clearInputs } from '../redux/actions/inputActions';

import { logedIn } from '../redux/actions/logedInAction';

const LoginForm = ({ inputData, inputs, logedIn, clearInputs }) => {
  return (
    <div className="LoginForm">
      <form
        onSubmit={e => {
          e.preventDefault();
          signInWithEmailAndPassword(inputs.email, inputs.password).then(uid =>
            logedIn(uid)
          );
          // logedIn();
        }}
        className="form flex-column center-box shadow max-width-500 padding-all-25"
        method="post"
      >
        <h2 className="h2 text-center">Sign In</h2>
        <input
          onChange={e => inputData(e)}
          value={inputs.email}
          className="form-input Login-form__input"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          onChange={e => inputData(e)}
          value={inputs.password}
          className="form-input Login-form__input"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button className="btn" type="submit" label="Sign In">
          Sign In
        </button>
        <p className="last-par text-center">
          <span>Need to create an account? </span>
          <NavLink to="/register" className="link" onClick={clearInputs}>
            Sign Up
          </NavLink>
        </p>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    inputs: state.inputs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputData: e => dispatch(inputData(e)),
    logedIn: uid => dispatch(logedIn(uid)),
    clearInputs: () => dispatch(clearInputs()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
