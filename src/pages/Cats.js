import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import catsData from '../CatsData'; 

function Cats() {
    return <main className='cats'>
        <h1> Cats </h1>
        {
            catsData.map(({ id, image }) => <Link to={id} key={id}>
                <img src={image} />
            </Link>)
        }
        <Outlet />
    </main>
}

export default Cats;