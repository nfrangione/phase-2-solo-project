import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingsList from '../container/PaintingsList';
import PaintingForm from './PaintingForm'


class App extends React.Component{
  constructor(){
    console.log('hi from constructor')
    super()
    this.state = {
      color: "red",
      paintings: [],
      formView: false,
      message:null
    }
  }

  changeColor = (e) =>{
    console.log(this.state.color)
    this.setState({color:e.target.value})
      
  }

  toggleForm = () => {
    this.setState({
      formView: !this.state.formView
    })
  }

  addPainting = (info) => {
    const newPainting = {
      image: info.image,
      title: info.title,
      artist: {
        name: info.artist
      },
      date: info.date,
      dimensions: {
        width: info.width,
        height: info.height
      },
      votes: 0 
    } 

    this.setState({
      paintings: [...this.state.paintings, newPainting], 
      formView: !this.state.formView 
    })

  }

  updateMessage = (data) => {
    this.setState({message:data})
  }

  componentDidMount(){
    console.log('hi from componentDidMount')
    fetch('http://localhost:3000/paintings')
    .then(res => res.json())
    .then(paintingsJson => this.setState({paintings: paintingsJson}))
  }




  render(){
    console.log('hi from render')
  return (
    <div>

      <NavBar
        color={this.state.color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"
        changeColor={this.changeColor}
      />
      {this.state.message?this.state.message: null}
      <button onClick={this.toggleForm}>Show/Hide new painting form</button>
      {this.state.formView ? <PaintingForm updateMessage={this.updateMessage} addPainting={this.addPainting} updateMessage={this.updateMessage} /> : <PaintingsList paintings={this.state.paintings} updateMessage={this.updateMessage} />}

    </div>
  )
  }
}

export default App;
