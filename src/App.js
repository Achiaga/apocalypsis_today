import React from 'react';
import CoverPage from './components/CoverPage';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import './App.css';

function App() {
	return (
		<div className='app'>
			<Logo />
			<CoverPage />
			<NavBar />
			<Clock />
		</div>
	);
}

export default App;
