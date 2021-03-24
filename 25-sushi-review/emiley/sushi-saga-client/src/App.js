import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushi: [],
    index: 0,
    wallet: 100,
    message: null,
  };

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((sushi) => this.setState({ sushi }));
    // .then((sushi) => this.setState({ sushi: sushi }));
  }

  getFourSushi = () => {
    const fourSushi = this.state.sushi.slice(
      this.state.index,
      this.state.index + 4
    );
    return fourSushi;
  };

  updateIndex = () => {
    this.setState({
      index: this.state.index + 4,
    });
  };

  eatSushi = (sushiId, sushiPrice) => {
    if (this.state.wallet >= sushiPrice) {
      const newSushiArry = this.state.sushi.map((s) => {
        if (s.id === sushiId) {
          return { ...s, isEaten: true };
        } else {
          return s;
        }
      });

      this.setState({
        sushi: newSushiArry,
        wallet: this.state.wallet - sushiPrice,
      });
    } else {
      this.setState({ message: "no more money :(" });
    }
  };

  eatenSushi = () => {
    return this.state.sushi.filter((s) => s.isEaten);
  };

  render() {
    return (
      <div className="app">
        {this.state.message}
        <SushiContainer
          fourSushi={this.getFourSushi()}
          moreSushi={this.updateIndex}
          eatSushi={this.eatSushi}
        />
        <Table eatenSushi={this.eatenSushi()} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;
