import React from 'react';
import '../styles/EachBook.scss';

const EachBook = props => {
    console.log('props in EachBook', props)

    return (
        <div onClick={() => {
            props.history.push("/holders")
            localStorage.setItem('bookId', props.book.id)
            }
        } className="each-book">
            <img src={props.book.image} alt={props.book.title}/>
            <p className="title">{props.book.title}</p>
            <p className="author">Author: {props.book.author}</p>
            <p className="date">Posted: {props.book.posted}</p>
        </div>
    )
}

export default EachBook;