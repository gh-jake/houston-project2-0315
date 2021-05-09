import React, { Component } from 'react'
import BestSellerList from './BestSellerList';

const LIST_URL = "https://api.nytimes.com/svc/books/v3/lists/current/";
const API_KEY = "iZhuQnpYtKzX8AErnrmb0s3pUC5gGRuc";
const INTERNAL_URL = "http://localhost:3000/mybooks";

class Home extends Component {
    state = {
        fiction: [],
        nonfiction: []
      }
    
    componentDidMount() {
        this.fetchFiction();
        this.fetchNonfiction();
    }
    
    fetchFiction = () => {
        fetch(LIST_URL + "combined-print-and-e-book-fiction.json?api-key=" + API_KEY)
        .then(res => res.json())
        .then(data => {
          this.setState({
            fiction: data.results.books
          });
        });
    }
    
    fetchNonfiction = () => {
        fetch(LIST_URL + "combined-print-and-e-book-nonfiction.json?api-key=" + API_KEY)
        .then(res => res.json())
        .then(data => {
          this.setState({
            nonfiction: data.results.books
          });
        });
    }

    addBook = (book) => {
      // console.log(book)
      fetch(INTERNAL_URL, {
          method: "POST",
          headers: 
          {
              "Content-Type": "application/json",
              Accept: "application/json"
          },
          body: JSON.stringify({
              "title": book.title,
              "author": book.author,
              "summary": book.description
          })
      })
      
    }
    
    render() {
        return (
            <div className='home'>
                <h1>NYT  Books App</h1>
                <div className='book-list'>
                    <h2>Fiction Bestsellers:</h2>
                    <BestSellerList books={this.state.fiction} addBook={this.addBook}/>
                </div>
                <div className='book-list'>
                    <h2>Nonfiction Bestsellers:</h2>
                    <BestSellerList books={this.state.nonfiction} addBook={this.addBook}/>
                </div>
            </div>
        )
    }
}

export default Home;