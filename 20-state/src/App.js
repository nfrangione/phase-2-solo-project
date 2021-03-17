import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {paintings} from './painting_data'
import PaintingsList from './components/PaintingList'
import NavBar from './components/NavBar'

class App extends Component {
  // constructor(){
  //   super(props)
  //   this.state = {
  //     color: "red"
  //   }
  // }

  state = {
    color: "green"
  }

  changeColor = (e) => {
    console.log(e.target.value)
    this.setState({color:e.target.value}, 
      () => console.log('inside:', this.state))
      console.log('outside:', this.state)
  }
  
  render(){
    return (
      <div className="App">
        <NavBar
        changeColor={this.changeColor} 
        color={this.state.color} 
        title="Painters" 
        description="an app about art" />

        <PaintingsList paintingsList={paintings}/>
      </div>
    )
  }
}

export default App;
