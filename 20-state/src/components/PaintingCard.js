const PaintingCard = ({painting}) => {
    // let {image, title, artist, date} = props.painting
    // let {width, height} = props.painting.dimension 
    return(
        <div>
            <img src={painting.image}/>
            <h4>"{painting.title}" by {painting.artist.name} </h4>
            <p> Year: {painting.date}</p>
            <p> Dimensions: {painting.dimensions.width} in. x {painting.dimensions.height} in.</p>
        </div>
    )
} 

export default PaintingCard