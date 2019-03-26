import React from 'react';
import {counterAction} from '../redux/actions/counterAction';
import {userArr} from '../redux/actions/userArrAction';
import {connect} from 'react-redux';
import './Validation.css';


const Validation = ({counterAction, userArrAction, counter, selected, userArr}) => {
    
    
    const actions = (e) => {
        const regex = /^.{1}$/;
        if (e.key.match(regex)){
            counterAction();
            userArrAction(e.key, counter, selected);
        }else {
            return
        }
        
    }
    return (
       <div>
           {/* <p></p> */}
           <p onKeyDown = {actions} className='InputText' tabIndex = {-1}>
           {userArr.map(el=> <span className={el.isValid ? 'valid' : 'invalid'}>{el.key}</span>)}
           </p>
       </div>
       
    );
};

const MSTP = (state) => ({
   counter: state.counter,
   selected: state.selected,
   userArr: state.userArr,

})
const MDTP = (dispatch) => ({
    counterAction: function() {dispatch(counterAction())},
    userArrAction: function(key, counter, selected) {dispatch(userArr(key, counter, selected))}, 
})

export default connect(MSTP, MDTP)(Validation);