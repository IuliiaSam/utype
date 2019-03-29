import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDevmodeLevels } from '../../server';
import choosenLevelAction from '../../Levels/Action/choosenLevelAction';

import { clearStatistics } from '../../redux/actions/clearStatisticsAction';
import { clearUserArr } from '../../redux/actions/userArrAction';
import { resetCounter } from '../../redux/actions/counterAction';


import Header from '../../Header/Header';
import Loader from 'react-loader-spinner';

import './DevmodeLevels.css';

class DevmodeLevels extends Component {
  componentDidMount() {
    this.props.getDevmodeLevels();

    this.props.clearStatistics();
    Object.keys(this.props.selected).length && this.props.clearUserArr(this.props.selected);
    this.props.resetCounter();
  }

  render() {
    const { devLevels, chooseLevel } = this.props;

    return (
      <div className="levels-container levels-container--dev">
        <Header themeMode="header header--dev" />

        { devLevels.length>0 ?
       ( <div className="list__wrapper list__wrapper--dev">
          <ul className="levels-list">
            {devLevels.map(level => (
              <li
                key={level.id}
                data-id={level.id}
                className="levels-item levels-item--dev"
              >
                <Link
                  to={`/dev-mode/${level.title}`}
                  data-id={level.id}
                  className="item-number item-number--dev"
                  onClick={e => chooseLevel(e, devLevels)}
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
  devLevels: state.devLevels,
  selected: state.selected,
});

const mdtp = dispatch => ({
  getDevmodeLevels: () => dispatch(getDevmodeLevels()),
  chooseLevel: (e, data) => dispatch(choosenLevelAction(e, data)),

  resetCounter: () => dispatch(resetCounter()),
  clearStatistics: () => dispatch(clearStatistics()),
  clearUserArr: selected => dispatch(clearUserArr(selected))
});

export default connect(
  mstp,
  mdtp
)(DevmodeLevels);
