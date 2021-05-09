import React, { Component } from 'react';
import MyBooksList from './MyBooksList';

const INTERNAL_URL = "http://localhost:3000/mybooks";

class MyBooks extends Component {
    state = {
        savedBooks: []
    }
    
    componentDidMount() {
        fetch(INTERNAL_URL)
        .then(res => res.json())
        .then(data => {
            this.setState({
                savedBooks: data
            });
        });
    }

    deleteBook = (book) => {
        const targetId = book.id;
        const myBooks = this.state.savedBooks.filter(book => book.id != targetId);
        this.setState({ savedBooks: myBooks });
        fetch(INTERNAL_URL + `/${targetId}`, {
            method: "DELETE",
            headers: 
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });
    }

    render() {
        return (
            <div>
                <h2>My Reading List</h2>
                <MyBooksList myBooks={this.state.savedBooks} deleteBook={this.deleteBook}/>
            </div>
        )
    }
}

export default MyBooks;