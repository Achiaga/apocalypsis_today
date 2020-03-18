import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

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

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach(interval => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span>
				{timeLeft[interval]} {interval}{' '}
			</span>
		);
	});

	return (
		<div className='clock'>
			{timerComponents.length ? timerComponents : <span>Time's up!</span>}
		</div>
	);
}
