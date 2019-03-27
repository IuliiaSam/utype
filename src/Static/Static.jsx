import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import './Static.css';

class Static extends Component {
    render() {
        return (
        <div className="wrapChart">
            <div className='LineChart'>
            <Line
                data={this.props.arr.historyDate}
                options={{
                    title: {
                        display: true,
                        text: "Прогресс скорости",
                        fontSize: 14,
                    },
                    legend: {
                        display: true,
                        position: "right",
                    },
                    maintainAspectRatio: false,
                }}    
            />
              </div>
            <div className='LineChart chart2'>
            <Line
                data={this.props.cor.historyDate}
                options={{
                    title: {
                        display: true,
                        text: "Прогресс правильного ввода",
                        fontSize: 12,
                    },
                    legend: {
                        display: true,
                        position: "right",
                    },
                    maintainAspectRatio: true,
                }}    
            />
              </div>
              </div>
 );
 }         
}
const MSTP =  (state) =>({
    arr: state.speedprogression,
    cor: state.correctinput,
  })

  export default connect(MSTP) (Static);
  
































