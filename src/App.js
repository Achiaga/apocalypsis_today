import React from 'react';
import CoverPage from './components/CoverPage';
import NavBar from './components/NavBar';
import { CountdownLogo } from './components/CountdownLogo';
import Type from './components/Type';
import './App.css';

function App() {
	return (
		<div className='app'>
			<NavBar />
			<CountdownLogo />
			<CoverPage />
			<Type />
		</div>
	);
}

export default App;
