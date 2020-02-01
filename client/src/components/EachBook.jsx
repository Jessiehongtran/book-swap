import React from 'react';
import '../styles/EachBook.scss';

const EachBook = props => {

    return (
        <div className="each-book">
            <img src={props.book.image} alt={props.book.title}/>
            <p className="title">{props.book.title}</p>
            <p className="author">Author: {props.book.author}</p>
            <p className="date">Posted: {props.book.posted}</p>
        </div>
    )
}

export default EachBook;