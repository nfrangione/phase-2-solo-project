import React from 'react';

class Painting extends React.Component{
  state = {
    votes: this.props.painting.votes
  }

  addVote = () => {
    this.setState(prevState => {
      return {votes:prevState.votes+1}
        }
      )
  }

  componentDidUpdate = (prevProps,prevState) =>{
    console.log('props:', prevProps)
    console.log('state: ', prevState)

    if(prevState.votes < this.state.votes){
      console.log(`${this.props.painting.title} got a new vote!`)
    }
  }



  render(){
    return (
      <div>
        <img src={this.props.painting.image} />
        <h4>
          "{this.props.painting.title}" by {this.props.painting.artist.name}
        </h4>
        <p>Year: {this.props.painting.date}</p>
        <p>
          Dimensions: {this.props.painting.dimensions.width} in. x {this.props.painting.dimensions.height} in.
        </p>
        <div className="ui labeled button">
          <div className="ui red button" onClick={this.addVote}>
            <i className="heart icon"></i>
            Add Vote
            <a className="ui basic left pointing label">
              {this.state.votes}
            </a>
          </div>
        </div>
        
      </div>
        
    );
  }
  
};

export default Painting;
