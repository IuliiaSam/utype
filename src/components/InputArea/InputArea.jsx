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
      userArrAction(e.key, counter, selectedLevel);
    } else {
      return;
    }
  };
  const levelArr = selectedLevel.symbols.split('').map((el, idx) => ({key: el, id: idx}));
  return (
    <div>
      <div className="InputArea__sample">{levelArr.map(el => <span key = {el.id} className={el.id === counter ? 'underline' : 'noUnderline'}>{el.key}</span>)}</div>
      <div
        className="InputArea__textArea"
        tabIndex={-1}
        onKeyDown={actions}
        onFocus={focus}
        onBlur={blur}
      >
        <p>
          {userArr.map(el => (
            <span key={el.id} className={el.isValid ? 'valid' : 'invalid'}>{el.key}</span>
          ))}
          {isTextAreaFocused ? <span className="cursor" /> : null}
        </p>
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
