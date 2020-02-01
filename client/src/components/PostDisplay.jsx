import React from 'react';
import '../styles/PostDisplay.scss';

const PostDisplay = props => {

    let imageUrl = "https://i.ya-webdesign.com/images/book-icon-png-4.png"
    let bookTitle = "Book Title"
    let bookAuthor = "Book Author"

    if (props.postUpdate){
        imageUrl = props.postUpdate.imageUrl || "https://i.ya-webdesign.com/images/book-icon-png-4.png"
        bookTitle = props.postUpdate.title 
        bookAuthor = props.postUpdate.author 
    } 

    return (
        <div className="post-display">
            <img src={imageUrl} alt="book-image"/>
            <p>Title: {bookTitle}</p>
            <p>Author: {bookAuthor}</p>
        </div>
    )
}

export default PostDisplay;