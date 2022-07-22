import styled from 'styled-components';

export const Nav = styled.nav`
	background: ${({ theme }) => theme.cardBackgroundColor};
	width: 100%;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: flex;
		gap: 1rem;
	}
`;

export const PageName = styled.a`
	color: #777777;
	font-size: 2rem;
	text-align: center;
	text-decoration: none;
`

export const PageLink = styled.a`
	color: #777777;
	font-size: 1.5rem;
	text-align: center;
	text-decoration: none;

	&.active {
		color: #ff5350;
	}
`