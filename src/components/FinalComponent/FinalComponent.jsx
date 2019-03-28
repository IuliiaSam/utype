import React, { Component } from 'react';
import {connect} from 'react-redux';
import './FinalComponent.css';






const num = 70

class FinalComponent extends Component {
    // const {num} = this.props
    render() {
        return (
            <div className='FinalComponent-commonDiv'>
            <div className='FinalComponent-commonDiv--AllStar'>
            <div className={num>=0 ? "FinalComponent-gold" : "FinalComponent-silver"}></div>
            <div className={num>=20 ? "FinalComponent-gold" : "FinalComponent-silver"}></div>
            <div className={num>=40 ? "FinalComponent-gold" : "FinalComponent-silver"}></div>
            <div className={num>=60 ? "FinalComponent-gold" : "FinalComponent-silver"}></div>
            <div className={num>=80 ? "FinalComponent-gold" : "FinalComponent-silver"}></div>
            </div>
            <div className='FinalComponent-scoreDiv'>
            <p className='FinalComponent-Title'>Your score:</p>
            <p className='FinalComponent-score'>2400</p>
            <div className='FinalComponent'>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            </div>
                
            </div>
        );
    }
}

 