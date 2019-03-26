import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLevels } from '../server';
import choosenLevelAction from '../Levels/Action/choosenLevelAction';

import './levels.css';

class Levels extends Component {
  componentDidMount() {
    this.props.getLevelsFromFirebase();
  }

  // drawLevels = data =>
  //   data.map(level => (
  //     <li key={level.id} data-id={level.id} className="levels-item">
  //       <Link
  //         to={`/${level.title}`}
  //         data-id={level.id}
  //         className="item-number"
  //         onClick={e => chooseLevel(e, levels)}
  //       >
  //         {level.id}
  //       </Link>
  //     </li>
  //   ));

  render() {
    const { levels, chooseLevel } = this.props;

    return (
      <div className="levels-container">
        <ul className="levels-list">
          {levels.map(level => (
            <li key={level.id} data-id={level.id} className="levels-item">
              <Link
                to={`/${level.title}`}
                data-id={level.id}
                className="item-number"
                onClick={e => chooseLevel(e, levels)}
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
  levels: state.levels
});

const mdtp = dispatch => ({
  getLevelsFromFirebase: () => dispatch(getLevels()),
  chooseLevel: (e, data) => dispatch(choosenLevelAction(e, data))
});

export default connect(
  mstp,
  mdtp
)(Levels);
