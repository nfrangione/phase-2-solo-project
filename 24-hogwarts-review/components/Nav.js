import piggy from "../porco.png";
import React from "react";
 
function SortDropz(propz) {
  return (
    <select onChange={e => propz.sort(e.target.value)}>
        <option value="none"></option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
    </select>
  )
}

const Nav = props => {
  return (
    <div className="navWrapper">

      <SortDropz sort={props.sort}/>

      <span className="headerText">Hogwarts</span>

      <div onClick={props.greaseClick} className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>

      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav;
