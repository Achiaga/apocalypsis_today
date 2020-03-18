import React, { useState } from 'react';
import './Clock.css';

export default function Clock() {
	const [time, setTime] = useState(new Date().toLocaleString());
	console.log(time);
	return (
		<div>
			<h1>5000:10:10</h1>
			<h1>this is the good {time}</h1>
		</div>
	);
}
