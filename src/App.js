import React from 'react';
import CoverPage from './components/CoverPage';
import NavBar from './components/NavBar';
import OctopusLogo from './components/OctopusLogo';
import { Main } from './components/Main.js';
import MainBg from './assets/map.jpg';
import SecondBg from './assets/maskbg.jpg';

import styled from 'styled-components';

const AppContainer = styled.div`
	text-align: center;
	position: sticky;
	margin: auto;
	height: 100%;
`;

const BgMap = styled.img`
	position: absolute;
	left: 10%;
	top: 0%;
	width: 100vw;
	height: 100vh;
	z-index: -1;
`;
const BgMask = styled.img`
	position: absolute;
	left: 75%;
	top: 30%;
	width: 400px;
	height: 800px;
	z-index: -1;
	mask: radial-gradient(circle at 20% 40%, transparent, #fff 50%);
`;

function App() {
	return (
		<AppContainer>
			<NavBar />
			<OctopusLogo />
			<BgMap src={MainBg} alt='main-background' />
			<BgMask src={SecondBg} alt='second-background' />
			<CoverPage />
			<Main />
		</AppContainer>
	);
}

export default App;
