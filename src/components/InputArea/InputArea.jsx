import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { typigData } from '../../redux/actions/typingActions';
import { selectLevel } from '../../redux/actions/selectLevelActions';
import { counterAction } from '../../redux/actions/counterAction';
import { userArr } from '../../redux/actions/userArrAction';
import { focus, blur } from '../../redux/actions/toggleFocusActions';
import { inputAction } from '../../redux/actions/inputAction';

import './InputArea.css';

const keys = Array.from(document.querySelectorAll('.key'));

const InputArea = ({
  counter,
  counterAction,
  userArrAction,
  userArr,
  inputAction
}) => {
  const actions = e => {
    const regex = /^.{1}$/;
    if (e.key.match(regex)) {
      counterAction();
      userArrAction(e.key, counter, userArr, e.keyCode);
      inputAction(e, userArr);
      // console.log('keycode', e.charCode);
      const keysArr = Array.from(document.querySelectorAll('.key'));
      keysArr.map(el => el.classList.remove('pressed'));
      keysArr.map(el => {
        el.className.includes(e.charCode.toString())
          ? el.classList.add('pressed')
          : el.classList.remove('pressed');
      });
    } else {
      return;
    }
  };

  const styles = {
    valid: {
      color: '#4caf50',
      boxShadow: '0 3px 0px #4caf50',
    },
    invalid: {
      color: 'red',
      boxShadow: '0 3px 0px red',
    },
    defStyle: {
      backgroundColor: 'none',
      // color: '#fff',
      boxShadow: '0 3px 0px #555',
    }
  };

  const inputEl = useRef(null);
  useEffect(() => inputEl.current.focus());

  return (
    <div className="InputArea">
      <div
        className="InputArea__sample"
        tabIndex={-1}
        // onKeyDown={actions}
        onKeyPress={actions}
        ref={inputEl}
      >
        {userArr.map(el => (
          <span
            key={el.id}
            style={
              el.isValid === true
                ? styles.valid
                : el.isValid === false
                ? styles.invalid
                : styles.defStyle
            }
            className={el.id === counter ? 'underline' : 'noUnderline'}
          >
            {el.key}
            {el.key === ';' && <br />}
          </span>
        ))}
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
    isTextAreaFocused: state.toggleFocus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    typigData: e => dispatch(typigData(e)),
    selectLevel: data => dispatch(selectLevel(data)),
    counterAction: function() {
      dispatch(counterAction());
    },
    userArrAction: function(key, counter, selected, keyCode) {
      dispatch(userArr(key, counter, selected, keyCode));
    },
    inputAction: function(e, userArr) {
      dispatch(inputAction(e, userArr));
    },
    focus: () => dispatch(focus()),
    blur: () => dispatch(blur())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputArea);
