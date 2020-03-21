import React, { useState, useEffect } from 'react';
import './CountdownLogo.css';
import nuclear from '../assets/nuclear_bomb4.png';

export default function CountdownTimer() {
	const calculateTimeLeft = () => {
		const difference = +new Date('2021-01-01') - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		if (timeLeft.hours < 10) timeLeft.hours = '0' + timeLeft.hours;
		if (timeLeft.minutes < 10) timeLeft.minutes = '0' + timeLeft.minutes;
		if (timeLeft.seconds < 10) timeLeft.seconds = '0' + timeLeft.seconds;

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const time = (
		<span>
			{timeLeft.days} d : {timeLeft.hours} h : {timeLeft.minutes} m :{' '}
			{timeLeft.seconds} s
		</span>
	);

	const timerComponents = (
		<div className='countdown'>
			{/* <p style={{ opacity: 0, fontSize: '10px' }}>.</p> */}
			<img src={nuclear} alt='clock-image' className='nucelar' />
			<p className='time'>{time}</p>
		</div>
	);

	const timeIsUp = <span>The apocalypsis has come!</span>;

	return <>{timeLeft ? timerComponents : timeIsUp}</>;
}
