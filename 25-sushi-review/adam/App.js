import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    index: 0,
    sushi: [],
    money: 100,
    eaten: []
  }

  giveMeCash = e => {
    e.preventDefault()
    this.setState({ money: this.state.money + parseInt(e.target.cash.value, 10)})
  }

  componentDidMount() {
    fetch(API).then(r => r.json()).then(sushi => this.setState({ sushi }))
  }

  munchies = (sushi) => {
    this.setState(prevState => {
      const newSushi = [...prevState.sushi]
      const i = newSushi.indexOf(sushi)
      newSushi[i].eaten = true
      const newBank = this.state.money - sushi.price
      const tummy = [...prevState.eaten]
      tummy.push(sushi)
      return {sushi: newSushi, money: newBank, eaten: tummy}
    })
  }

  canWeEat = (sushi) => {
    return sushi.price <= this.state.money && !sushi.eaten
  }

  eatSushi = sushi => {
    if (this.canWeEat(sushi)) {
      this.munchies(sushi)
    } else if (sushi.eaten){
      alert("this is creepy")
      return null
    } else {
      alert("YOU BROKE!")
      return null
    }
  }

  sushiClick = () => {
    if (this.state.index < this.state.sushi.length - 4) {
      
      this.setState({ index: this.state.index + 4 })
    } else {
      this.setState({ index: 0 })
    }
  }

  showFour = () => {
    return this.state.sushi.slice(this.state.index, this.state.index + 4)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eat={this.eatSushi} click={this.sushiClick} sushi={this.showFour()} />
        <Table moreCash={this.giveMeCash} eaten={this.state.eaten} money={this.state.money} />
      </div>
    );
  }
}

export default App;