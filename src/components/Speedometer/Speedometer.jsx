import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const Speedometer = ({charactersPerMinute}) => {
    return (
            <div>
                <ReactSpeedometer 
                    ringWidth={40}
                    textColor="white"
                    minValue={0}
                    maxValue={700}
                    value={charactersPerMinute}
                    segments={3}
                    startColor="lightgreen"
                    endColor="darkgreen"
                    needleColor="black"
                    needleTransitionDuration={3000}
                    needleTransition="easeElastic"
                />
            </div>
    )
}

export default Speedometer;