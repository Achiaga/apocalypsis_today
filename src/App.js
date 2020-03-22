import React from 'react';
import CoverPage from './components/CoverPage';
import NavBar from './components/NavBar';
import { CountdownLogo } from './components/CountdownLogo';
import Type from './components/Type';
import styled from 'styled-components';
import './App.css';

function App() {
	const Title = styled.h1`
		font-size: 1.5em;
		text-align: center;
		color: palevioletred;
	`;
	return (
		<div className='app'>
			<Title>Hello World, this is my first styled component!</Title>
			<NavBar />
			<CountdownLogo />
			<CoverPage />
			<Type />
		</div>
	);
}

export default App;
