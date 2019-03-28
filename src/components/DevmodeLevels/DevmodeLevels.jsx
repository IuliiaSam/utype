import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDevmodeLevels } from '../../server';
import choosenLevelAction from '../../Levels/Action/choosenLevelAction';

import Header from '../../Header/Header';

import './DevmodeLevels.css';

class DevmodeLevels extends Component {
  componentDidMount() {
    this.props.getDevmodeLevels();
  }
 

  render() {
    const { devLevels, chooseLevel } = this.props;

    return (
      <div className="levels-container">
      <Header />
        <ul className="levels-list">
          {devLevels.map(level => (
            <li key={level.id} data-id={level.id} className="levels-item levels-item--dev">
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
      </div>
    );
  }
}

// get data from state
const mstp = state => ({
  devLevels: state.devLevels
});

const mdtp = dispatch => ({
  getDevmodeLevels: () => dispatch(getDevmodeLevels()),
  chooseLevel: (e, data) => dispatch(choosenLevelAction(e, data))
});

export default connect(
  mstp,
  mdtp
)(DevmodeLevels);
