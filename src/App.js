import React, { Component } from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import firebase from 'firebase';

import Levels from '../src/Levels/Levels';
import './App.css';
import Static from "./Static/Static";
import {speed, correct} from  './redux/action/actionStatic'

import Registration from './Registration/Registration';
import LevelScreen from './components/LevelScreen/LevelScreen';
import LoginForm from './LoginForm/LoginForm';
import DevmodeLevels from './components/DevmodeLevels/DevmodeLevels';
import FinalComponent from './components/FinalComponent/FinalComponent';

class App extends Component {

  // componentDidMount(){
  //   this.props.speed(); 
  //   this.props.correct();
  // }
  
  //  render () {
    
  componentDidMount() {
    const {history} = this.props;

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        // console.log("Logined");
        history.push('/levels')
      } else {
        // console.log("Not logined");
        history.push('/login')
      }
    })
  }
  render() {

    return (

      <div className="App">
               {/* <Static/>
      
const MDTP =  (dispatch) =>({
  speed:  function(){
      dispatch(speed())
  },
  correct:  function(){
      dispatch(correct())
  },
})
export default connect(null,MDTP) (App); */}

        <Switch>
          <Route path='/register' component={Registration} />
          <Route path='/login' component={LoginForm} />
          <Route exact path="/levels" component={Levels} />
          <Route path={`/levels/:id`} component={LevelScreen} />
          <Route path={`/dev-mode/:id`} component={LevelScreen} />
          <Route exact path="/dev-mode" component={DevmodeLevels} />
          <Route path ="/result" component={FinalComponent} />
          <Route path='/statistics' component={Static}/>
        </Switch>
      </div>
    )}};
  


function mapStateToProps(state) {
  return {
    levelName: state.selected.title,
  }
}

export default withRouter(connect(mapStateToProps)(App));
