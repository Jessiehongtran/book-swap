import React from 'react';
import {books} from '../data/bookData';
import EachBook from './EachBook';
import '../styles/Books.scss';

const Books = props => {

    let booksToShown = []

    if (props.searchFilter.length>0){
        booksToShown = props.searchFilter
    } else {
        booksToShown = books
    }

    return (
        <div className="book-list">
            {booksToShown.map(book => 
                <EachBook 
                    book={book}
                    history={props.history}
                />)}
        </div>
    )
}

export default Books;