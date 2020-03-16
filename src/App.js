import React from 'react';
import logo from './assets/Biohazard.png';
import CoverPage from './components/CoverPage';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<CoverPage />
				<img src={logo} className='App-logo' alt='logo' />
			</header>
		</div>
	);
}

export default App;
