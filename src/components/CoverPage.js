import React from 'react';
import styled, { keyframes } from 'styled-components';

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
	}
`;
const blink = keyframes`
	0%,
	12%,
	18.999%,
	23%,
	31.999%,
	37%,
	44.999%,
	46%,
	49.999%,
	51%,
	58.999%,
	61%,
	68.999%,
	71%,
	85.999%,
	96%,
	100% {
		/* text-shadow: 0 0 80px red, 0 0 30px FireBrick, 0 0 6px DarkRed; */
		text-shadow: 0 0 80px yellow, 0 0 30px darkgoldenrod, 0 0 6px darkgoldenrod;
		/* color: red; */
		color: yellow;
	}
	19%,
	22.99%,
	32%,
	36.999%,
	45%,
	45.999%,
	50%,
	50.99%,
	59%,
	60.999%,
	69%,
	70.999%,
	86%,
	95.999% {
		/* color: rgb(105, 8, 8); */
		color: darkgoldenrod;
		text-shadow: none;
	}
`;
const slowBlink = keyframes`
	0%,
	12%,
	18.999%,
	23%,
	31.999%,
	37%,
	44.999%,
	46%,
	49.999%,
	51%,
	58.999%,
	61% {
		/* text-shadow: 0 0 80px red, 0 0 30px FireBrick, 0 0 6px DarkRed; */
		text-shadow: 0 0 80px yellow, 0 0 30px darkgoldenrod, 0 0 6px darkgoldenrod;
		/* color: red; */
		color: yellow;
	}
	19%,
	22.99%,
	32%,
	36.999%,
	45%,
	45.999%,
	50%,
	50.99%,
	59%,
	60.999%,
	69% {
		/* color: rgb(105, 8, 8); */
		color: darkgoldenrod;
		text-shadow: none;
	}
`;
const hang = keyframes`
	0%,
	1.99% {
		transform: rotate(-5deg);
	}
	2%,
	2.99% {
		transform: rotate(5deg);
	}
	3%,
	3.99% {
		transform: rotate(-5deg);
	}
	4%,
	4.99% {
		transform: rotate(5deg);
	}
	5%,
	5.99% {
		transform: rotate(-5deg);
	}
	6%,
	6.99% {
		transform: rotate(5deg);
	}
	7%,
	7.99% {
		transform: rotate(-5deg);
	}
	8%,
	8.99% {
		transform: rotate(5deg);
	}
	9%,
	9.99% {
		transform: rotate(-5deg);
	}
	10%,
	10.99% {
		transform: rotate(5deg);
	}
	14% {
		/* color: rgb(105, 8, 8); */
		color: darkgoldenrod;
		text-shadow: none;
	}
	40% {
		transform: rotate(230deg);
		transform-origin: 40% 75%;
	}
	75% {
		transform: rotate(170deg);
		transform-origin: 40% 75%;
	}
	100% {
		transform: rotate(200deg);
		transform-origin: 40% 75%;
	}
`;

const TittleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	top: 0;
	left: 0;
	right: 0;
	height: 5rem;
	padding-top: 1.5rem;
	margin-left: 10rem;
	text-align: center;
	text-transform: uppercase;
	word-spacing: 4rem;
	letter-spacing: 13px;
	color: rgb(255, 255, 0);
	text-shadow: 0 0 80px rgb(255, 255, 0), 0 0 30px darkgoldenrod,
		0 0 6px darkgoldenrod;
	font-family: 'Monoton', cursive;
	font-size: 3.5rem;
	z-index: -10;
	& > span {
		position: relative;
		&:hover {
			cursor: pointer;
			color: cyan;
			text-shadow: 0 0 80px cyan, 0 0 30px darkcyan, 0 0 6px darkcyan;
			animation: ${bounceLetter} 0.9s;
		}
	}
	.R {
		animation-name: ${blink};
		animation-duration: 11s;
		animation-delay: 4s;
		animation-iteration-count: infinite;
	}
	.A {
		animation-name: ${blink};
		animation-duration: 11s;
		animation-delay: 0s;
		animation-iteration-count: infinite;
	}
	.P {
		animation: ${slowBlink} 15s linear infinite;
	}
	.endLetter {
		margin-right: 4rem;
	}
	.off {
		color: darkgoldenrod;
		text-shadow: none;
	}
	.hangEdge {
		display: inline-block;
		animation: ${hang} 5s linear forwards;
		animation-delay: 10s;
		margin: 0;
	}
	.hangEdge span {
		z-index: 110;
		animation: ${slowBlink} 15s linear infinite;
		animation-delay: 13s;
	}
`;

function CoverPage() {
	return (
		<TittleWrapper>
			<span className='A'>A</span>
			<span>p</span>
			<span>o</span>
			<span>c</span>
			<span className='R'>a</span>
			<span className='R'>l</span>
			<span>y</span>
			<span className='P'>p</span>
			<span>s</span>
			<span>i</span>
			<span className='endLetter'>s</span>
			<span> T</span>
			<span className='off'>0</span>
			<span>d</span>
			<span>4</span>
			<div class='hangEdge'>
				<span>Y</span>
			</div>
		</TittleWrapper>
	);
}

export default CoverPage;
