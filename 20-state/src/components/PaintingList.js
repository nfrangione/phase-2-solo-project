import React, {Component} from 'react'
import PaintingCard from './PaintingCard'

class PaintingList extends Component {

    render(){
        return(
            <div>
                {
                  this.props.paintingsList.map(painting => {
                      return <PaintingCard key={painting.id} painting={painting}/>
                  })  
                }
            </div>
        )
    }
}

export default PaintingList