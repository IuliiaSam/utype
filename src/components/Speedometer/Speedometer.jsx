import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import './Speedometer.css';

const Speedometer = ({charactersPerMinute}) => {
    return (
            <div className='Speedometer'>
                <ReactSpeedometer 
                    ringWidth={10}
                    textColor="black"
                    minValue={0}
                    maxValue={800}
                    value={charactersPerMinute}
                    segments={3}
                    startColor="red"
                    endColor="green"
                    needleColor="#4caf50"
                    needleHeightRatio={0.7}
                    needleTransitionDuration={3000}
                    needleTransition="easeElastic"
                    // fluidWidth={true}
                    width={105}
                    height={60}
                />
            </div>
    )
}

export default Speedometer;