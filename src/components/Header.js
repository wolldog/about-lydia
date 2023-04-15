import React from 'react';


export default function Header({currentPage, handlePageChange}) {

    return (
        <div>
            <h1>Header</h1>
            <ul>
             <li><a href='#About' onClick={() => handlePageChange('About')}>About</a></li>
             <li><a href='#Portfolio' onClick={() => handlePageChange('Portfolio')}>Portfolio</a></li>
             <li><a href='#Contact' onClick={() => handlePageChange('Contact')}>Contact</a></li>
             <li><a href='#Resume' onClick={() => handlePageChange('Resume')}>Resume</a></li>
            </ul>
        </div>
    );
};