import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import './Speedometer.css';

const Speedometer = ({charactersPerMinute}) => {
    return (
            <div className='Speedometer'>
                <ReactSpeedometer 
                    ringWidth={40}
                    textColor="black"
                    minValue={0}
                    maxValue={1200}
                    value={charactersPerMinute}
                    segments={3}
                    startColor="lightgreen"
                    endColor="darkgreen"
                    needleColor="black"
                    needleTransitionDuration={3000}
                    needleTransition="easeElastic"
                    width={270}
                    height={270}
                />
            </div>
    )
}

export default Speedometer;