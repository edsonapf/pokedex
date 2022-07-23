import styled from 'styled-components';

export const Nav = styled.nav`
	background: ${({ theme }) => theme.cardBackgroundColor};
	width: 100%;
	padding: 0 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-shadow: 2px 2px 10px -6px rgba(0,0,0,0.6);
	border-radius: 1rem;
	height: 5rem;
	gap: 2rem;

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: flex;
		gap: 1rem;
		height: 100%;
	}
`;

export const LogoImg = styled.img`
	fill: #ff5350;
`;

export const Li = styled.li`
	color: #777;
	height: 100%;
	display: flex;
	align-items: center;

	&.active {
		color: #ff5350;
		border-bottom: 2px solid #ff5350;
	}
`;

export const PageLink = styled.a`
	color: inherit;
	font-size: 1.5rem;
	text-decoration: none;
	font-weight: bold;
`