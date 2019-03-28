import React, { Component } from 'react';
import {connect} from 'react-redux';
import './FinalComponent.css';


class FinalComponent extends Component {

    render() {
        return (
            <div className='FinalComponent-commonDiv'>
            <div className='FinalComponent-commonDiv--AllStar'>
            <img src="./silver.png" alt="" className='FinalComponent-gold'/>
                <span className='FinalComponent-gold'></span>
                <span className='FinalComponent-gold FinalSpanCenter'></span>
                <span className='FinalComponent-gold FinalSpan'></span>
                <span className='FinalComponent-silver'></span>
                <navLink></navLink>
            </div>
            <div className='FinalComponent-scoreDiv'>
            <p className='FinalComponent-Title'>Your score:</p>
            <p className='FinalComponent-score'>2400</p>
            </div>
                
            </div>
        );
    }
}

function MSTP (state){
    return{
    
    }
}

function MDTP(dispatch){
    return{

    }
}



export default connect(MSTP,MDTP)(FinalComponent);