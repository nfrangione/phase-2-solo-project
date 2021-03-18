import React from 'react'

class PaintingForm extends React.Component{

    state = {
        art: {
            image: "",
            title: "",
            artist: "",
            date:"",
            width: "",
            height: "",
        },
        error:null
    }

    handleChange = (e) => {
        console.log(e.target)
        console.log(this.state.art)
        this.setState({art:{...this.state.art, [e.target.name]:e.target.value}})
    }
    
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     if(this.state.art.image.length > 1 && this.state.art.title.length >  1){
    //         this.props.addPainting(this.state.art)
    //     } else if (this.state.art.image.length > 1) {
    //         this.validateLength("title")
    //     } else if (this.state.art.title.length > 1){
    //         this.validateLength("image")
    //     } else {
    //         this.validateLength("title and image")
    //     }
    // }

    // validateLength = (item) => {
    //     this.setState({error:`Sorry ${item} must be 1 characters long`})
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPainting(this.state.art)
    }


    render(){
    return(
        <div>
            {this.state.error? this.state.error:null}
            <h1> Add a new Painting</h1>
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <input type="text" name="image" placeholder="ImgURL"/> <br/>
                <input type="text" name="title" placeholder="Title"/><br/>
                <input type="text" name="artist" placeholder="Artist Name"/><br/>
                <input type="text" name="date" placeholder="date"/><br/>
                <input type="text" name="width" placeholder="width"/><br/>
                <input type="text" name="height" placeholder="height"/><br/>
                <input type="submit" value="add new painting"/>
            </form>

        </div>
        )
    }

}

export default PaintingForm
