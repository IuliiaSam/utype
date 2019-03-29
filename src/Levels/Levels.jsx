import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLevels } from '../server';
import choosenLevelAction from '../Levels/Action/choosenLevelAction';
import { resetCounter } from '../redux/actions/counterAction';

import Loader from 'react-loader-spinner';
import { clearStatistics } from '../redux/actions/clearStatisticsAction';
import { clearUserArr } from '../redux/actions/userArrAction';

import Header from '../Header/Header';

import './levels.css';

class Levels extends Component {
  componentDidMount() {
    this.props.getLevelsFromFirebase();

    this.props.clearStatistics();
    Object.keys(this.props.selected).length && this.props.clearUserArr(this.props.selected);
    this.props.resetCounter();
  }

  render() {
    const {
      levels,
      chooseLevel,
      resetCounter,
      match,
      clearStatistics,
      clearUserArr,
      selected
    } = this.props;
    // useEffect = (() => {clearStatistics(); clearUserArr(selected)}, [match]);

    return (
      <div className="levels-container">

        <Header themeMode='header' />


    { levels.length>0 ? 
      (<div className='list__wrapper'>
        <ul className="levels-list"> 
          {levels.map(level => (
            <li key={level.id} data-id={level.id} className="levels-item">
              <Link
                to={`/levels/${level.title}`}
                data-id={level.id}
                className="item-number"
                onClick={e => {
                  chooseLevel(e, levels);
                  resetCounter();
                }}
              >
                {level.id}
              </Link>
            </li>
          ))} 
        </ul> 
      </div>)
      :
      ( <div className="loader-plane">
      <Loader  
            type="Plane"
            color="#00BFFF"
            height="100"	
            width="100" 
            /> 
      </div>)
    }

      </div>
    );
  }
}

// get data from state
const mstp = state => ({
  levels: state.levels,
  selected: state.selected
});

const mdtp = dispatch => ({
  getLevelsFromFirebase: () => dispatch(getLevels()),
  chooseLevel: (e, data) => dispatch(choosenLevelAction(e, data)),
  resetCounter: () => dispatch(resetCounter()),

  clearStatistics: () => dispatch(clearStatistics()),
  clearUserArr: selected => dispatch(clearUserArr(selected))
});

export default connect(
  mstp,
  mdtp
)(Levels);
