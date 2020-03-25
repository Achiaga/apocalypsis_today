import React from 'react';
import logo from '../assets/gas-mask.png';
import styled, { keyframes } from 'styled-components';
import './OctopusLogo.css';

const LogoWrapper = styled.div`
	width: 150px;
	height: 100px;
	position: absolute;
	top: 0;
	margin-top: 12rem;
	margin-left: 10rem;
	transform: scale(2) translate(-50%, -50%);
	z-index: -10;
`;

const colorShifter = keyframes`
	0% {
		box-shadow: 0 0 80px cyan, 0 0 30px darkcyan, 0 0 6px darkcyan;
		transform: scale(0.9);
	}
	33% {
		box-shadow: 0 0 80px red, 0 0 30px darkred, 0 0 6px darkred;
		transform: scale(1.3);
	}
	66% {
		box-shadow: 0 0 80px yellow, 0 0 30px yellow, 0 0 6px darkgoldenrod;
		transform: scale(0.9);
	}
	99% {
		box-shadow: 0 0 80px cyan, 0 0 30px darkcyan, 0 0 6px darkcyan;
		transform: scale(1.3);
	}
	`;

const MaskLogo = styled.img`
	width: 2rem;
	background-size: cover;
	border-radius: 50%;
	padding: 0;
	box-shadow: 0 0 80px cyan, 0 0 30px darkcyan, 0 0 6px darkcyan;
	z-index: 0;
	&:hover {
		cursor: pointer;
		animation: ${colorShifter} 20s infinite;
	}
`;

const LogoFountain = styled.div`
	& > span {
		display: block;
		margin: 5.1rem;
		margin-left: 4.7rem;
		position: absolute;
		border-left: 1px dashed lightgreen;
		transform-origin: 50% 100%;
		transform: translate(var(--tranlation));
		--tranlation: -50%;
		bottom: 4px;
		z-index: -1;
		width: 24px;
		border-radius: 50%;
	}
`;

function Logo() {
	return (
		<LogoWrapper>
			<LogoFountain className='logo-fountain'>
				<MaskLogo src={logo} alt='logo' />
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
			</LogoFountain>
		</LogoWrapper>
	);
}

export default Logo;
