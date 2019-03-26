import React from 'react';

import {connect} from 'react-redux';

import {typigData} from '../../redux/actions/typingActions';

import './InputArea.css';

const InputArea = ({inputText, typigData}) => {
  return (
    <div>
      <div className="InputArea__sample">Level text from store</div>
      <div className="InputArea__textArea" tabIndex={-1} onKeyDown={e=>typigData(e)}>
        <p>{inputText}</p>
      </div>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    inputText: state.inputText,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    typigData: (e) => dispatch(typigData(e))
  }

}

export default connect(mapStateToProps, mapDispatchToProps) (InputArea);