import React from 'react'
import HogDetails from './HogDetails'

export default class HogCard extends React.Component {

    state = {
        details: true
    }

    nameFormatter = name => {
        return name.toLowerCase().split(' ').join('_')
    }

    render() {
        let pigImage = require(`../hog-imgs/${this.nameFormatter(this.props.hog.name)}.jpg`)
        return (
            <div onClick={() => this.setState({ details: !this.state.details}) } className="ui four wide column pigTile card image">

                <h3>{this.props.hog.name}</h3>
                <img src={pigImage} alt="hog"/>
                {this.state.details && <HogDetails hog={this.props.hog} /> }
            </div>
        )
    }
}