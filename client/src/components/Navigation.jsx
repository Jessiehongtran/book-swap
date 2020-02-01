import React from 'react';
import {NavLink} from 'react-router-dom';
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
                <NavLink to='/' className="post">Post book</NavLink>
            </div>
        </div>
    )

}

export default Navigation;