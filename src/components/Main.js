import React from 'react';
import Type from './Type';
import { SideImages } from './SideImages';
import styled from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	margin-top: 4rem;
	height: 100%;
`;
export const Main = () => {
	return (
		<Wrapper>
			<Type />
			<SideImages />
		</Wrapper>
	);
};
