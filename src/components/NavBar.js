import React from 'react';
import './NavBar.css';

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar-container'>
				<h1 to='/'>Home</h1>
				<h1>Survival</h1>
				<h1>Map</h1>
				<h1>News</h1>
				<h1>Theories</h1>
				<h1>Day Zero</h1>
			</div>
		</div>
	);
}
