import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	width: 100;
	padding-top: 2rem;
`;

export const ContentContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	gap: 2rem;
	margin-top: 2rem;
`;