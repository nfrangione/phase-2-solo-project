import React, { Component } from "react";
import HogCard from './HogCard'

class HelloWorld extends Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.hogsData.map( hog => <HogCard key={hog.name} hog={hog} /> )}
      </div>
    );
  }
}
 
export default HelloWorld;
