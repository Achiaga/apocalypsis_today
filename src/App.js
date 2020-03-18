import React from 'react';
import CoverPage from './components/CoverPage';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import CountdownTimer from './components/CountdownTimer';
import './App.css';

function App() {
	return (
		<div className='app'>
			<Logo />
			<CoverPage />
			<NavBar />
			<CountdownTimer />
		</div>
	);
}

export default App;
