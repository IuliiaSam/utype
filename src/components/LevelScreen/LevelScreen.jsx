import React , {useEffect} from 'react';
import Monitor from '../Monitor/Monitor';
import Keyboard from '../Keyboard/Keyboard';
import {connect} from 'react-redux';

import './LevelScreen.css';
import Header from '../../Header/Header';
import FinalComponent from '../../components/FinalComponent/FinalComponent';
// import {clearStatistics} from '../../redux/actions/clearStatisticsAction';
// import {clearUserArr} from '../../redux/actions/userArrAction';

const LevelScreen = ({inputTracking, clearStatistics, clearUserArr, match, selected, strArr, counter, history}) => {
  // useEffect(() => {clearStatistics(); clearUserArr(selected)}, [match]);
  console.log(match.path)
  
  if(strArr.length===counter) {
    history.push('/result')
  }
  
  return (
    <div className={match.path.includes('dev-mode') ? "LevelScreen LevelScreen--dev" : "LevelScreen"}>
      <Header themeMode={match.path.includes('dev-mode') ? 'header--dev header': 'header'} />
      <Monitor inputTracking={inputTracking} />
      <Keyboard />
      {/* <FinalComponent /> */}
    </div>
  );
};

function MSTP (state) {
  return {
    inputTracking: state.inputTracking,
    selected: state.selected,
    strArr: state.userArr,
    counter: state.counter
  }
}

function MDTP (dispatch) {
  return {
    // clearStatistics: () => dispatch(clearStatistics()),
    // clearUserArr: (selected) => dispatch(clearUserArr(selected)),
  }
}

export default connect (MSTP, MDTP)(LevelScreen);
