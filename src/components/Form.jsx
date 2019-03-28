import React from 'react';
import { connect } from 'react-redux';

import {createUserWithEmailAndPassword} from '../server';

import {inputData} from '../redux/actions/inputActions';

const Form = ({inputData, inputs}) => {
  return (
    <form onSubmit={(e) =>{ e.preventDefault(); createUserWithEmailAndPassword(inputs.email, inputs.password, inputs.name)}}>
      <input onChange={(e) => inputData(e)} name='name' value={inputs.name} type="text" id=""/>
      <input onChange={(e) => inputData(e)} name='email' value={inputs.email} type="email" id=""/>
      <input onChange={(e) => inputData(e)} name='password' value={inputs.password} type="password" id=""/>
      <button type='submit'>SUBMIT</button>
    </form>
  );
};

function mapStateToProps (state) {
  return {
    inputs: state.inputs,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputData: (e) => dispatch(inputData(e))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Form);