import React from 'react';
import CoverPage from './components/CoverPage';
import { Drawer } from './components/Drawer';
import { Main } from './components/Main.js';
import MainBg from './assets/map.jpg';
import SecondBg from './assets/maskbg.png';
import Theme from './style/Theme';

import styled from 'styled-components';

const AppContainer = styled.div`
	/* background: ${props => props.theme.colors.black}; */
	text-align: center;
	position: sticky;
	margin: auto;
	height: 100%;
	width: 100vw;
`;

const BgMap = styled.img`
	position: absolute;
	right: 0;
	top: 0%;
	width: 1300px;
	height: 100vh;
	z-index: -1;
	overflow: hidden;
`;
const BgMask = styled.img`
	position: absolute;
	right: 0;
	top: 70%;
	width: 600px;
	height: 400px;
	z-index: -1;
	mask: radial-gradient(circle at 20% 40%, transparent, #fff 50%);
	overflow: hidden;
`;

function App() {
	return (
		<Theme>
			<AppContainer>
				<Drawer />
				<BgMap src={MainBg} alt='main-background' />
				<BgMask src={SecondBg} alt='second-background' />
				<CoverPage />
				<Main />
			</AppContainer>
		</Theme>
	);
}

export default App;
