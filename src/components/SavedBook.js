import React from 'react'

const SavedBook = (props) => {
    const handleClick = () => {
        props.deleteBook(props.book);
    }
    
    return (
        <div className="book">
            <h3>{props.book.title}</h3>
            <h4>{props.book.author}</h4>
            <p>{props.book.summary}</p>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default SavedBook;
