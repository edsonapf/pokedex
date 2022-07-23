import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	width: 100;
	padding-top: 2rem;
`;

export const ButtonsContainer = styled.div`
	width: 100%;
	margin-top: 2rem;

	.button-container-child:not(:first-child) {
		margin-left: 0.3rem;
	}
`;

export const PageButton = styled.button`
		background: ${({ theme }) => theme.cardBackgroundColor};
		color: #ff5350;
		border: none;
		font-size: 1rem;
		font-weight: bold;
		padding: 0.5rem;
		border-radius: 0.5rem;
		box-shadow: 2px 2px 10px -6px rgba(0,0,0,0.6);

		&:disabled {
			cursor: default;
		}
`;