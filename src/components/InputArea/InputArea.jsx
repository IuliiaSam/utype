import React from 'react'; 
import { connect } from 'react-redux';

import { typigData } from '../../redux/actions/typingActions';
import { selectLevel } from '../../redux/actions/selectLevelActions';

import './InputArea.css';

const InputArea = ({ inputText, typigData, selectedLevel, selectLevel }) => {
 
 

  return (
    <div>
      <div className="InputArea__sample">{selectedLevel.symbols}</div>
      <div
        className="InputArea__textArea"
        tabIndex={-1}
        onKeyDown={e => typigData(e)}
      >
        <p>{inputText}</p>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    inputText: state.inputText,
    selectedLevel: state.selected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    typigData: e => dispatch(typigData(e)),
    selectLevel: data => dispatch(selectLevel(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputArea);
