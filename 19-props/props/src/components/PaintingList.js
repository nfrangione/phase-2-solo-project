import PaintingCard from './PaintingCard'

const PaintingList = props => {
    return(
        <div>
            {
              props.paintingsList.map(painting => {
                  return <PaintingCard key={painting.id} painting={painting}/>
              })  
            }
        </div>
    )
}

export default PaintingList