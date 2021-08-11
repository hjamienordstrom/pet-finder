import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar({handleLogout}){
    return(
    <nav> 
        <ul>
            <Link to='/' style={{color:'black'}}><h3>Pet finder</h3></Link>
            <Link to='' onClick={handleLogout} style={{color:'black'}}>Logout</Link>
            <Link to='/addPet' style={{color:'black'}}>    Add Pet</Link>
        </ul>
    </nav>
    )
}

