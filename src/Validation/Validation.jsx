import React from 'react';
import {counterAction} from '../redux/actions/counterAction';
import {userArr} from '../redux/actions/userArrAction';
import {connect} from 'react-redux';
import './Validation.css';


const Validation = ({counterAction, userArrAction, counter, symbolsArr, userArr}) => {
    
    
    const actions = (e) => {
        counterAction();
        userArrAction(e.key, counter, symbolsArr);
    }
    return (
       <div>
           <p></p>
           <p onKeyDown = {actions} className='InputText' tabIndex = {-1}>
           {userArr.map(el=> <span className={el.isValid ? 'valid' : 'invalid'}>{el.key}</span>)}
           </p>
       </div>
       
    );
};

const MSTP = (state) => ({
   counter: state.counter,
   symbolsArr: state.levels,
   userArr: state.userArr,

})
const MDTP = (dispatch) => ({
    counterAction: function() {dispatch(counterAction())},
    userArrAction: function(key, counter, symbolsArr) {dispatch(userArr(key, counter, symbolsArr))}, 
})

export default connect(MSTP, MDTP)(Validation);