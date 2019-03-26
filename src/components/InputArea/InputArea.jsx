import React from 'react';

import { connect } from 'react-redux';

import { typigData } from '../../redux/actions/typingActions';
import { selectLevel } from '../../redux/actions/selectLevelActions';
import {counterAction} from '../../redux/actions/counterAction';
import {userArr} from '../../redux/actions/userArrAction';


import './InputArea.css';

const InputArea = ({ inputText, typigData, selectedLevel, selectLevel, counter, counterAction, userArrAction, userArr }) => {

  const actions = (e) => {
    const regex = /^.{1}$/;
    if (e.key.match(regex)){
        counterAction();
        userArrAction(e.key, counter, selectedLevel);
    }else {
        return
    }
    
}
  return (
    <div>
      <div className="InputArea__sample">{selectedLevel.symbols}</div>
      <div
        className="InputArea__textArea"
        tabIndex={-1}
        onKeyDown={actions}
      >
        <p>{userArr.map(el=> <span className={el.isValid ? 'valid' : 'invalid'}>{el.key}</span>)}</p>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    inputText: state.inputText,
    selectedLevel: state.selected,
    counter: state.counter,
    userArr: state.userArr,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    typigData: e => dispatch(typigData(e)),
    selectLevel: data => dispatch(selectLevel(data)),
    counterAction: function() {dispatch(counterAction())},
    userArrAction: function(key, counter, selected) {dispatch(userArr(key, counter, selected))},
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputArea);
