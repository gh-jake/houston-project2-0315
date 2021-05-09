import React from 'react'

const BookResult = (props) => {
    const handleClick = () => {
        props.addBook(props.book);
    }
    
    return (
        <div className="book">
            <h3>{props.book.book_title}</h3>
            <h4>{props.book.book_author}</h4>
            <p>{props.book.summary}</p>
            <button onClick={handleClick}>Add to Reading List</button>
        </div>
    )
}

export default BookResult;