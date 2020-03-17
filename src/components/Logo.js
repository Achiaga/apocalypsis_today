import React from 'react';
import logo from '../assets/gas-mask.png';
import './Logo.css';

function Logo() {
	return (
		<div class='logo-wrapper'>
			<div class='logo-fountain'>
				<img src={logo} alt='logo' className='logo' />
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class='pouce'>
				<div class='pouce-part'></div>
			</div>
		</div>
	);
}

export default Logo;
