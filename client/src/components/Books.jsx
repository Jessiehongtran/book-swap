import React from 'react';
import {books} from '../data/bookData';
import EachBook from './EachBook';

const Books = () => {

    return (
        <div>
            {books.map(book => 
                <EachBook book={book}/>)}
        </div>
    )
}

export default Books;