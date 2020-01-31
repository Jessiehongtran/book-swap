import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navigation.scss'

const Navigation = props => {

    return (
        <div className="navigation">
            <h1>BookSwap</h1>
            <div className="nav">
                <input type="text" placeholder="Search for books posted"/>
                <NavLink to='/'>Post book</NavLink>
            </div>
        </div>
    )

}

export default Navigation;