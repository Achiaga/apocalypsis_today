import React from 'react';
import './Clock.css';

export default function Clock() {
	let time = new Date().toLocaleString();
	console.log(time);
	return (
		<div>
			<h1>5000:10:10</h1>
			<h1>this is the good {time}</h1>
		</div>
	);
}
