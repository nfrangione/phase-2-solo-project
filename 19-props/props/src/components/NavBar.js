const NavBar = props => {
    console.log(props)
    return(
        <div className={`ui inverted ${props.color} menu`}>
            <a className="item">
                <h2 className="ui header">
                    <div className="content">{props.title}</div> 
                    <div className="sub header">{props.description}</div>
                </h2>
            </a>
        </div>
    )
}

export default NavBar