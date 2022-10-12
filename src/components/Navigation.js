import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className='nav'>
            <h1>Check Skills</h1>
            <div className='Link'>
                <Link className='link' to = '/'>Topics</Link>
                <Link className='link' to = '/blog'>Blog</Link>
                <Link className='link' to = '/statistics'>Statistics</Link>
            </div>
        </div>
    )
   
}

export default Navigation