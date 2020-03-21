import React from 'react';
import logo from '../assets/gas-mask.png';
import './OctopusLogo.css';

function Logo() {
	return (
		<div className='logo-wrapper'>
			<div className='logo-fountain'>
				<img src={logo} alt='logo' className='logo' />
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className='pouce'>
				<div className='pouce-part'></div>
			</div>
		</div>
	);
}

export default Logo;
