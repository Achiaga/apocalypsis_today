import React from 'react';
import styled, { keyframes } from 'styled-components';

const type = keyframes`
	0% {
		width: 0;
	}
	1% {
		opacity: 1;
	}
	99.9% {
		border-right: 0.15em solid orange;
	}
	100% {
		opacity: 1;
		border: none;
	}
	`;
const type_end = keyframes`
	0% {
		width: 0;
	}
	1% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
	`;
const blink = keyframes`
	50% {
		border-color: transparent;
	}
	`;

const TypeWrapper = styled.section`
	margin-left: 15vw;
	text-align: left;
	color: white;
	height: 100%;
	width: 50vw;

	p {
		border-right: 0.15em solid orange;
		font-family: 'Courier';
		font-size: 18px;
		white-space: nowrap;
		overflow: hidden;
		&:nth-child(1) {
			width: 22em;
			opacity: 0;
			animation: ${type} 3s steps(40, end);
			animation-fill-mode: forwards;
		}
		&:nth-child(2) {
			width: 32em;
			opacity: 0;
			animation: ${type} 3s steps(40, end);
			animation-delay: 3s;
			animation-fill-mode: forwards;
		}
		&:nth-child(3) {
			width: 21em;
			opacity: 0;
			animation: ${type} 3s steps(40, end);
			animation-delay: 6s;
			animation-fill-mode: forwards;
		}
		&:nth-child(4) {
			width: 27em;
			opacity: 0;
			animation: ${type} 3s steps(40, end);
			animation-delay: 9s;
			animation-fill-mode: forwards;
		}
		&:nth-child(5) {
			width: 20em;
			opacity: 0;
			animation: ${type} 3s steps(40, end);
			animation-delay: 12s;
			animation-fill-mode: forwards;
		}
		&:nth-child(6) {
			width: 31em;
			opacity: 0;
			animation: ${type} 3s steps(40, end);
			animation-delay: 15s;
			animation-fill-mode: forwards;
		}
		&:nth-child(7) {
			width: 10em;
			opacity: 0;
			animation: ${type} 3s steps(40, end);
			animation-delay: 18s;
			animation-fill-mode: forwards;
		}
		&:nth-child(8) {
			width: 29em;
			opacity: 0;
			animation: ${type} 3s steps(40, end);
			animation-delay: 21s;
			animation-fill-mode: forwards;
		}
		&:nth-child(9) {
			width: 35em;
			opacity: 0;
			animation: ${type_end} 3s steps(40, end),
				${blink} 0.5s step-end infinite alternate;
			animation-delay: 24s;
			animation-fill-mode: forwards;
		}
	}
`;

export const Type = () => {
	return (
		<TypeWrapper>
			<p>Ready to the collapse of our society. </p>
			<p>Sit tight because this is going to be a hell of ride. </p>
			<p>There can be 2 possible scenarios:</p>
			<p>The apocalypsis is alreadey here and you are</p>
			<p>thinking: What the hell I do now?</p>
			<p>Or option 2, what can I do to avoid being the idiot</p>
			<p>of the option 1.</p>
			<p>Maybe you have watched The walking Dead, well...</p>
			<p>This is gonna be kind of similar but without fucking Carl.</p>
		</TypeWrapper>
	);
};
