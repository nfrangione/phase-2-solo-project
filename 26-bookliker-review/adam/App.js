import React, { Component } from "react";
import {
  Container,
  Header,
  Menu,
  Button,
  List,
  Image
} from "semantic-ui-react";

import BookList from './BookList.js'

class App extends Component {
  state = {
    books: [],
    selected: {},
    showLikes: true
  }

  componentDidMount() {
    fetch('http://localhost:3000/books').then(r => r.json()).then(books  => {
      this.setState({ books })
    })
  }

  clickLike = book => {

    const newUsers = [...book.users]

    if (!book.users.find(e => e.id === 1)) {

      //this one adds the new user to like
      newUsers.push({"id":1, "username":"pouros"})

      fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'PATCH', headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }, body: JSON.stringify({
          users: newUsers
        })
      }).then(r => r.json()).then(freshBook => { 
        

        this.setState(prevState => {
          const newBooks = [...prevState.books]
          const found = newBooks.find(b => b.id == freshBook.id)
          const lastIndex = freshBook.users.length - 1
          found.users.push(freshBook.users[lastIndex])

          return {books: newBooks, selected: freshBook}
        })

        //this.setState({ selected }) - did not modify "books" in state
        //                              ...only the selected book.
      })
    
    } else {
      // aaand now, to UNlike a book....
      
      // this one removes that last users
      // BUG FOUND!  This will only work if the current user is the 
      // last element of the array.
      newUsers.pop()

      fetch(`http://localhost:3000/books/${book.id}`,{
        method: 'PATCH', headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }, body: JSON.stringify({
          users: newUsers
        })
      }).then(r => r.json()).then(unLikedBook => {
        this.setState(prevState => {
          const newBooks = [...prevState.books]
          const found = newBooks.find(b => b.id == unLikedBook.id)
          found.users.pop()

          return {books: newBooks, selected: unLikedBook}
        })
      })
    }
  }

  selectBook = (selected, e) => {
    e.stopPropagation()
    this.setState({ selected })
  }


  render() {
    console.log(this.state.selected)
    const { title, description, img_url, users } = this.state.selected
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Bookliker</Menu.Item>
          
        </Menu>
        <main>
          <Menu vertical inverted>
            <Menu.Item as={"a"} onClick={e => console.log("book clicked!")}>
              <ul>
                {this.state.books.map((book, i) => <BookList select={this.selectBook} key={i} book={book}/>)}
              </ul>
            </Menu.Item>
          </Menu>
          <Container text>
            <Header>{title}</Header>
            <Image
              src={img_url}
              size="small"
            />
            <p>{description}</p>
            <Button
              onClick={() => this.clickLike(this.state.selected)}
              color="red"
              content="Like"
              icon="heart"
              label={{
                basic: true,
                color: "red",
                pointing: "left",
                content: users && users.length
              }}
            />
            <Header>Liked by</Header>
            <List>
              {users && users.map(u => <List.Item icon="user" content={u.username} />)}
            </List>
          </Container>
        </main>
      </div>
    );
  }
}

export default App;
