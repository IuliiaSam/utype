import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Static from "./Static/Static";
import {speed, correct} from  './redux/action/actionStatic'

class App extends Component {

  componentDidMount(){
    this.props.speed(); 
    this.props.correct();
  }
  
   render () {
    
    return (
      <div className="App">
               <Static/>
      </div>
     );
  }
}


const MDTP =  (dispatch) =>({
  speed:  function(){
      dispatch(speed())
  },
  correct:  function(){
      dispatch(correct())
  },
})


export default connect(null,MDTP) (App);

