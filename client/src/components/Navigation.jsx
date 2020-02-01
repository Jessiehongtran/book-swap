import React from 'react';
import '../styles/Navigation.scss';
import Search from './Search';

const Navigation = props => {

    return (
        <div className="navigation">
            <h1>BookSwap</h1>
            <div className="nav">
                <Search 
                    setSearchFilter = {props.setSearchFilter}
                />
                <button 
                    className="post"
                    onClick={()=> {props.history.push('/post')}}
                >
                    Post book
                </button>
            </div>
        </div>
    )

}

export default Navigation;