import React from 'react'
import SavedBook from '../components/SavedBook';

const MyBooksList = (props) => {
    const myList = props.myBooks.map(bookObj => 
        <SavedBook book={bookObj} deleteBook={props.deleteBook}/>
    );
    
    return (
        <div>
            {myList}
        </div>
    )
}

export default MyBooksList;