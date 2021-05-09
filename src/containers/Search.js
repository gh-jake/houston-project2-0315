import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import ResultsList from './ResultsList';

const BASE_URL = "https://api.nytimes.com/svc/books/v3/reviews.json?";
const API_KEY = "iZhuQnpYtKzX8AErnrmb0s3pUC5gGRuc";
const INTERNAL_URL = "http://localhost:3000/mybooks";

class Search extends Component {
    state = {
        input: '',
        inputType: '',
        results: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSearch = (event) => {
        event.preventDefault();
        if (this.state.inputType === 'title') {
            this.searchTitle(this.prepareInput(this.state.input));
        }
        else {
            this.searchAuthor(this.prepareInput(this.state.input));
        }
    }
    
    searchTitle = (titlePar) => {
        fetch(BASE_URL + `title=${titlePar}&api-key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                results: data.results
            });
        });
    }

    searchAuthor = (authorPar) => {
        fetch(BASE_URL + `author=${authorPar}&api-key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                results: data.results
            });
        });
    }

    prepareInput = (string) => {
        return string.toLowerCase().split(' ').map(word => {
            return (word.charAt(0).toUpperCase() + word.slice(1));
          }).join('+');
    }

    addBook = (book) => {
        fetch(INTERNAL_URL, {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "title": book.book_title,
                "author": book.book_author,
                "summary": book.summary
            })
        })
        
    }

    render() {
        
        return (
            <div>
                <h3>Search for a book:</h3>
                <SearchBar handleSearch={this.handleSearch} handleChange={this.handleChange}/>
                <ResultsList books={this.state.results} addBook={this.addBook}/>
            </div>
        )
    }
}

export default Search;