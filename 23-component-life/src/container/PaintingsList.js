import React from 'react';
import Painting from '../components/Painting';

class PaintingsList extends React.Component{
  componentWillUnmount(){
    console.log('hi from componentWillUnmount')
    this.props.updateMessage(null)
    
  }
  render(){
    return(<div>
       <h1>Paintings</h1>
      {
      this.props.paintings.map(painting => (
        <Painting
          key={painting.id}
          painting={painting}
        />
      ))
      }
    </div>)
  }
}

export default PaintingsList;
