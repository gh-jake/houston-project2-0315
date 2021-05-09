import React from 'react'
import BookResult from '../components/BookResult';

const ResultsList = (props) => {
    const searchResults = props.books.map(bookObj => 
        <BookResult book={bookObj} addBook={props.addBook}/>
    );
    
    return (
        <div>
            {searchResults}
        </div>
    )
}

export default ResultsList;