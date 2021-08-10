import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar({handleLogout}){
    return(
    <nav> 
        <ul>
            <Link to='/'><h3>Pet finder</h3></Link>
            <Link to='' onClick={handleLogout}>Logout</Link>
            <Link to='/addPet'>Add Pet</Link>
        </ul>
    </nav>
    )
}

