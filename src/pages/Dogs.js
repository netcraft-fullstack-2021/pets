import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dogs() {
    
    return <main className='dogs'>
        <h1> Dogs </h1>
        <div className='dogs-nav'>
            <Link to='food' className='food'>Food</Link>
            <Link to='toys' className='toys'>Toys</Link>
        </div>
        <Outlet />
    </main>

}

export default Dogs;