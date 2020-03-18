import React, { useState, useEffect } from 'react';
import './Clock.css';

export default function Clock() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	function currentTime() {
		setTime(new Date().toLocaleTimeString());
	}

	useEffect(() => {
		// Update the document title using the browser API
		setInterval(() => currentTime(), 1000);
	});

	console.log(time);
	return (
		<div>
			<h1>5000:10:10</h1>
			<h1>{time}</h1>
		</div>
	);
}
