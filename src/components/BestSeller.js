import React from 'react'

const BestSeller = (props) => {
    const book = props.book;

    const handleClick = () => {
        props.addBook(book);
    }
    
    return (
        <div>
            <br></br><br></br>
            <img src={book.book_image} alt='book cover' className='book-cover'></img>
            <h3>{book.rank}</h3>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <p>{book.description}</p>
            <button onClick={handleClick}>Add to Reading List</button>
        </div>
    )
}

export default BestSeller;