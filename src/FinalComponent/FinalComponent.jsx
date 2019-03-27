import React, { Component } from 'react';
import {connect} from 'react-redux';


class FinalComponent extends Component {

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

function MSTP (state){
    return{
        score:state.finalResult.score,
        acuracy:state.finalResult.score,
    }
}

function MDTP(dispatch){
    return{

    }
}



export default connect(MSTP,MDTP)(FinalComponent);