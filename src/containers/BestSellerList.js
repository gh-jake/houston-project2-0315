import React from 'react';
import BestSeller from "../components/BestSeller";

const BestSellerList = (props) => {
    const renderBooks = props.books.map(bookObj => 
        <BestSeller book={bookObj} addBook={props.addBook}/>
    );
    
    return (
        <div>
            {renderBooks}
        </div>
    )
}

export default BestSellerList;