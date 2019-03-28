import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

import { getUserStat } from '../server';
import { getUserStatistics } from '../redux/actions/userStatisticsAction';

import './Static.css';
import Header from '../Header/Header';

class Static extends Component {
  componentDidMount = () => {
    const userID = localStorage.getItem('uid');

    getUserStat(userID).then(statArr => this.props.getUserStatistics(statArr));
  };

  render() {
    const { stats } = this.props;
    console.log(stats);

    // accuracy: 2
    // averageSpeed: 3592
    // charactersPerMinute: 4800
    // levelFinish: 1553781689168
    // percentOfErrors: 98
    // wordsPerMinute: 169

    let datesArr = [];
    let avgSpeedArr = [];
    let accurArr = [];
    stats.map(el => {
      datesArr.push(moment(el.levelFinish).format('DD/MM/YY'));
      avgSpeedArr.push(el.averageSpeed);
      accurArr.push(el.accuracy);
    });

    const avgSpeedData ={
        labels: datesArr,
        datasets: [
            {
                data: avgSpeedArr,
                label: 'Прогресс скорости',
            }
        ]
    }

    const avgAccurData ={
        labels: datesArr,
        datasets: [
            {
                data: accurArr,
            }
        ]
    }

    return (
      <div>
        <Header themeMode='header' />

        <div className="wrapChart">
          <div className="LineChart">
            <Line
              data={avgSpeedData}
              options={{
                title: {
                  display: true,
                  text: 'Прогресс скорости',
                  fontSize: 14
                },
                legend: {
                  display: false,
                  position: 'right'
                },
                maintainAspectRatio: false
              }}
            />
          </div>
          <div className="LineChart chart2">
            <Line
              data={avgAccurData}
              options={{
                title: {
                  display: true,
                  text: 'Прогресс правильного ввода',
                  fontSize: 12
                },
                legend: {
                  display: false,
                  position: 'right'
                },
                maintainAspectRatio: true
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
const MSTP = state => ({
  arr: state.speedprogression,
  cor: state.correctinput,
  stats: state.userStatistics
});

const MDTP = dispatch => ({
  getUserStatistics: statArr => dispatch(getUserStatistics(statArr))
});

export default connect(
  MSTP,
  MDTP
)(Static);
