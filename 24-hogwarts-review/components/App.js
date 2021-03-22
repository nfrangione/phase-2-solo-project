import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
 
class App extends Component {
  state = {
    grease: false,
    sort: 'all'
  }

  chooseGrease = () => this.setState({ grease: !this.state.grease})
 
  greaseFilter = () => {
    if (this.state.grease) {
      return hogs.filter(hog => hog.greased)
    } else {
      return hogs
    }
  }

  selectSort = sort => this.setState({ sort })

  sortHogs = () => {
    switch (this.state.sort) {

      case 'name':
        return [...this.greaseFilter()].sort( (a, b) => {
          if (a.name < b.name) {
            return -1
          } else {
            return 1
          }
        })
        // return [...this.greaseFilter()].sort( (a, b) => a.name < b.name ? -1 : 1)


      case 'weight':
        return [...this.greaseFilter()].sort((a,b) => a.weight - b.weight)


      default:
        return this.greaseFilter()
    }
  }

  render() {
    console.log(this.state.sort)
    return (
      <div className="App">
        <Nav sort={this.selectSort} greaseClick={this.chooseGrease} />
        <HelloWorld hogsData={this.sortHogs()} />
      </div>
    );
  }
}

export default App;
