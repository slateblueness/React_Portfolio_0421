import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <img src={logo} className='logo-img'/>
            <p>
                react와 router로 작성한 페이지입니다. <br/>
                환영합니다.
            </p>
        </div>
    )
}