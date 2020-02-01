import React from 'react';
import '../styles/Search.scss';
import {books} from '../data/bookData';

const Search = props => {
    console.log('props in search component', props)
    const handleChange = e => {
        console.log(e.target.value)
        const searchVal = e.target.value
        let found = []
        for (let i = 0; i<books.length; i++){
            if (books[i].title.toLowerCase().includes(searchVal.toLowerCase())){
                console.log('fireee')
                found.push(books[i])
            }
        }
        props.setSearchFilter(found)
        
    }

    return (
        <div className="search">
            <input 
                type="text" 
                placeholder="Search for books posted"
                onChange={handleChange}
            />
        </div>
    )
}

export default Search;