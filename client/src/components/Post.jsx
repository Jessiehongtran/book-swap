import React, {useState} from 'react';
import '../styles/Post.scss';

const Post = props => {
    const [bookPost, setBookPost] = useState({})

    const handleChange = e => {
        setBookPost({...bookPost, [e.target.name]: e.target.value})
        props.setPostUpdate({...bookPost, [e.target.name]: e.target.value})     
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('bookPost', bookPost)
        // post to backend and auto created posted_at by created_at
    }

    return (
        <div className="post-book">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Book title"
                    name="title"
                    required
                    onChange={handleChange} 
                />
                <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    required
                    onChange={handleChange} 
                />
                <input
                    type="text"
                    placeholder="Copy book image address (url) and paste here"
                    name="imageUrl"
                    onChange={handleChange} 
                />
                <button type="submit" className="post-btn">Post</button>
            </form>
        </div>
    )
}

export default Post;