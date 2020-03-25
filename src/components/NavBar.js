import React from 'react';
import styled, { keyframes } from 'styled-components';

const Navbar = styled.div`
	background-color: #171717;
	position: fixed;
	left: 0em;
	width: 10rem;
	height: 100%;
	top: 0;
	padding: 0;
	margin: 0;
	color: #4d4d4e;
	font-size: xx-small;
	z-index: 10;
`;

const NavbarContainer = styled.div`
	position: relative;
	top: 27vh;
	background-color: #171717;
`;

const bounceLetter = keyframes`
		0% {
			transform: scale3d(1, 1, 1);
		}
		30% {
			transform: scale3d(1.25, 0.75, 1);
		}
		40% {
			transform: scale3d(1.15, 0.85, 1);
		}
		65% {
			transform: scale3d(0.95, 1.05, 1);
		}
		75% {
			transform: scale3d(1.05, 0.95, 1);
		}
		100% {
			transform: scale3d(1, 1, 1);
		}ransform: rotate(360deg);
	  }
	`;

const Element = styled.h1`
	padding: 1rem;
	margin: 0;
	z-index: 100;
	&:hover {
		cursor: pointer;
		color: cyan;
		overflow: hidden;
		animation: ${bounceLetter} 0.9s;
	}
	&:nth-child(1) {
		color: cyan;
	}
	&:active {
		color: cyan;
	}
`;

export default function Drawer() {
	return (
		<Navbar>
			<NavbarContainer>
				<Element>Home</Element>
				<Element>Survival</Element>
				<Element>Map</Element>
				<Element>News</Element>
				<Element>Theories</Element>
				<Element>Day Zero</Element>
			</NavbarContainer>
		</Navbar>
	);
}
