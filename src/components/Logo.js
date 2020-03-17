import React from 'react';
import logo from '../assets/Biohazard.png';
import './Logo.css';

function Logo() {
	return (
		<div className='logo-container'>
			<img src={logo} alt='logo' className='logo' />
		</div>
	);
}

export default Logo;
