import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../css/style.css';

export default function Header() {
    return (
        <div className='header-style'>
            <NavLink
                className={({isActive}) => isActive ?('active-style') :('link-style')}
                to='/home'
            >
                Home
            </NavLink>

            <NavLink
                className={({isActive}) => isActive ?('active-style') :('link-style')}
                to='/storylist'
            >
                Story
            </NavLink>
        </div>
    )
}