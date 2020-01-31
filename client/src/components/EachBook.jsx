import React from 'react';

const EachBook = props => {

    return (
        <div>
            <img src={props.book.image} alt={props.book.title}/>
            <p>{props.book.title}</p>
            <p>Posted: {props.book.posted}</p>
        </div>
    )
}

export default EachBook;