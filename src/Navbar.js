import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {

	return (
		<nav className="navbar">
			<NavLink to='/dogs' className='dogs'> Dogs </NavLink>
			<NavLink to='/cats' className='cats'> Cats </NavLink>
			<NavLink to='/fish' className='fish'> Fish </NavLink>
		</nav>
	);
}

export default NavBar;
