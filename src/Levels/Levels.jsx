import React, { Component } from 'react' 
import {connect} from 'react-redux';  
import {Link} from 'react-router-dom';
import {getLevels} from  '../Levels/firebase/firebase';

import './levels.css';

 

class Levels extends Component {
 
  componentDidMount(){
    this.props.getLevelsFromFirebase()
  }
  
  drawLevels = (data)=> (
    data.map( level=> (
      <li key={level.id} data-id={level.id} className="levels-item">
        {/* <span className="item-level">Level : {level.level}</span>
        <span className="item-row">Row : {level.row}</span>
        <span className="item-title">Title : {level.title} </span> */} 
          <Link to='/level' className="item-number">
              {level.id}
          </Link> 
      </li>
    ))
  ) 

  render() {
    const {levels} = this.props; 
    
    return (
      <div className="levels-container">
         <ul className="levels-list">
            {this.drawLevels(levels)}  
         </ul>
      </div>
    )
  }
}


// get data from state
const mstp = (state)=>({
 levels : state.levels,
})

const mdtp = (dispatch)=>({
  getLevelsFromFirebase : () => dispatch( getLevels() )
})

export default connect(mstp,mdtp)(Levels);