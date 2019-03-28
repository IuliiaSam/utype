import React , {useEffect} from 'react';
import Monitor from '../Monitor/Monitor';
import Keyboard from '../Keyboard/Keyboard';
import {connect} from 'react-redux';

import './LevelScreen.css';
import Header from '../../Header/Header';
import FinalComponent from '../FinalComponent/FinalComponent';



const LevelScreen = ({userArr}) => {


  return (
    <div className="LevelScreen">
       <Header />
       <Monitor/>
       <Keyboard/>
    </div>
  );
};




function MSTP (state){
  return{
  userArr: state.userArr
  }
}

function MDTP(dispatch){
  return{

  }
}



export default connect(MSTP,MDTP)(LevelScreen);

