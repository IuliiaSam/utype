import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import '../Registration/Registration.css';

import { signInWithEmailAndPassword } from '../server';

import { inputData } from '../redux/actions/LoginInputActions';

import {logedIn} from '../redux/actions/logedInAction';

const LoginForm = ({ inputData, inputs, logedIn }) => {
  return (
    <div className="Form-wrapper">
      <form
        onSubmit={e => {
          e.preventDefault();
          signInWithEmailAndPassword(inputs.email, inputs.password).then(uid => logedIn(uid));
          // logedIn();

        }}
        className="Form shadow"
        method="post"
      >
      <h2 className="Form__title">Sign In</h2>
      <input
        onChange={e => inputData(e)}
        value={inputs.email}
        className="Form__input"
        type="email"
        name="email"
        placeholder="Enter your email"
        autoFocus
      />
      <input
        onChange={e => inputData(e)}
        value={inputs.password}
        className="Form__input"
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <button className="btn" type="submit" label="Sign In">
        Sign In
      </button>
      <small className="text-center">
        <span>Need to create an account? </span>
        <NavLink to='/register' className='link'>Sign Up</NavLink>
      </small>
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
    logedIn: (uid) => dispatch(logedIn(uid)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
