import React from 'react';
import CoverPage from './components/CoverPage';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import './App.css';

function App() {
	return (
		<div className='app'>
			<Logo />
			<CoverPage />
			<NavBar />
			<h1>Clock</h1>
		</div>
	);
}

export default App;
