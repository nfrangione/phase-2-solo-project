import React, {Component} from "react";
import {
  Menu,
} from "semantic-ui-react";

import BookList from './components/BookList'
import BookInfo from './components/BookInfo'

 class App extends Component {

  state = {
    books: [],
    bookInfo: null
  }

  componentDidMount(){
    fetch(`http://localhost:3000/books`)
    .then(res => res.json())
    .then(books => this.setState({books}))

  }

  displayBook = (bookInfo) => {
    this.setState(prevState => {
      if(prevState.bookInfo == bookInfo){
        return ({bookInfo:null})
      }else {
        return ({bookInfo:bookInfo})
      } 
    })
  }
  



  //Set state with new user who liked book
  // `{"id":1, "username":"pouros"}`
    //If we already liked the book, we don't add the user
  //Patch the book `http://localhost:3000/books/:id`
  //with our user

  likeBook = (id) => {
    let ourUser = {"id":1, "username":"pouros"}
    if(this.state.bookInfo.users.find(user => ourUser.id == user.id)){

      let filteredUsers = this.state.bookInfo.users.filter(user => user.id !== 1)

      // let updatedBook = {...this.state.bookInfo, users:filteredUsers}

      this.updateBook(filteredUsers)

    } else {
      // this.setState({bookInfo:{...this.state.bookInfo, users:[...this.state.bookInfo.users, ourUser]}},  () => this.updateBook())
      let updateUsers = [...this.state.bookInfo.users, {"id":1, "username":"pouros"}]

      this.updateBook(updateUsers)
    }
    // if(this.state.bookInfo.users.includes(user))
    // this.setState({bookInfo:{}})
  }

  updateBook = (updatedUsers) => {

    fetch(`http://localhost:3000/books/${this.state.bookInfo.id}`,{
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({users:updatedUsers}),
    })
    .then(res => res.json())
    .then(book => this.setState({bookInfo:book}))
  }

  render(){
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Bookliker</Menu.Item>
        </Menu>
        <main>
          <Menu vertical inverted>
          <BookList onClick={this.displayBook} books={this.state.books} />
           
          </Menu>

          {this.state.bookInfo? <BookInfo bookInfo={this.state.bookInfo} likeBook={this.likeBook} /> : null}
          

        </main>
      </div>
    );
  }
}

export default App;
