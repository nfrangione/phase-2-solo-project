import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {paintings} from './painting_data'
import PaintingsList from './components/PaintingList'
import NavBar from './components/NavBar'
import PaintingForm from './components/PaintingForm'

class App extends Component {

  state = {
    color: "green",
    formView: false,
    paintings: paintings
  }

  changeColor = (e) =>{
    console.log(this.state.color)
    this.setState({color:e.target.value})
      
  }

  toggleForm = ( ) => {
    this.setState(prevState => {
      console.log('prev:', prevState)
      return {formView: !prevState.formView
      }
    })
  }


  addPainting = (painting) => {
    this.setState({paintings:[...this.state.paintings, painting]})
  }
  
  render(){
    return (
      <div className="App">
        <NavBar
        changeColor={this.changeColor} 
        color={this.state.color} 
        title="Painters" 
        description="an app about art" />
        <button onClick={this.toggleForm}>Show/Hide Form</button>
      {this.state.formView? <PaintingForm addPainting={this.addPainting} /> :
      <PaintingsList paintingsList={this.state.paintings} />}
        
      </div>
    )
  }
}

export default App;
