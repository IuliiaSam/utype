import React from 'react';
import {counterAction} from '../redux/actions/counterAction';
import {userArr} from '../redux/actions/userArrAction';
import {connect} from 'react-redux';



const Validation = ({counterAction, userArr}) => {
    const actions = (e) => {
        counterAction();
        userArr(e);
    }
    return (
        <textarea onKeyDown={actions}></textarea>
    );
};

// const MSTP = (state) => ({
   

// })
const MDTP = (dispatch) => ({
    counterAction: function() {dispatch(counterAction())},
    userArr: function(e) {dispatch(userArr(e))}, 
})

export default connect(null, MDTP)(Validation);