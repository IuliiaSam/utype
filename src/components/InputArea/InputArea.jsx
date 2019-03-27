import React from 'react';

import { connect } from 'react-redux';

import { typigData } from '../../redux/actions/typingActions';
import { selectLevel } from '../../redux/actions/selectLevelActions';
import { counterAction } from '../../redux/actions/counterAction';
import { userArr } from '../../redux/actions/userArrAction';
import { focus, blur } from '../../redux/actions/toggleFocusActions';


import './InputArea.css';

const InputArea = ({
  inputText,
  typigData,
  selectedLevel,
  selectLevel,
  counter,
  counterAction,
  userArrAction,
  userArr,
  focus,
  blur,
  isTextAreaFocused,
}) => {

  const actions = e => {
    const regex = /^.{1}$/;
    if (e.key.match(regex)) {
      counterAction();
      userArrAction(e.key, counter, userArr);
    } else {
      return;
    }
  };

  const styles = {
    valid: {
      backgroundColor: 'green',
    },
    invalid: {
      backgroundColor: 'red',
    },
    defStyle: {
      backgroundColor: 'none',
    }  
  }
 
  return (
    <div>
      <div className="InputArea__sample"
              tabIndex={-1}
              onKeyDown={actions}
              >
      {userArr.map(el => 
      <span key = {el.id} style={el.isValid === true ? styles.valid : el.isValid === false ? styles.invalid : styles.defStyle} className={
        el.id === counter ? 'underline' : 'noUnderline'}>{el.key}</span>)}
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
    isTextAreaFocused: state.toggleFocus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    typigData: e => dispatch(typigData(e)),
    selectLevel: data => dispatch(selectLevel(data)),
    counterAction: function() {
      dispatch(counterAction());
    },
    userArrAction: function(key, counter, selected) {
      dispatch(userArr(key, counter, selected));
    },
    focus: () => dispatch(focus()),
    blur: () => dispatch(blur()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputArea);
