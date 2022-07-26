import styled from 'styled-components';

interface ButtonProps {
  isCurrentPage?: boolean;
}

export const Container = styled.div`
	.button-container-child:not(:first-child) {
		margin-left: 0.3rem;
	}
`;

export const Button = styled.button<ButtonProps>`
		background: ${({ isCurrentPage }) => isCurrentPage ? 'var(--red)' : 'var(--white)' };
		color: ${({ isCurrentPage }) => isCurrentPage ? 'var(--white)' : 'var(--red)' };
		border: none;
		font-size: 1rem;
		font-weight: bold;
		padding: 0.5rem;
		border-radius: 0.5rem;
		box-shadow: var(--box-shadow);

		&:disabled {
			cursor: default;
		}
`;