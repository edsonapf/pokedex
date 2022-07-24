import styled from 'styled-components';

export const Container = styled.div`
	border-radius: 1.5rem;
	background: var(--white);
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-shadow: var(--box-shadow);
	height: 12rem;
	width: 15rem;
	position: relative;
`

export const ImageContainer = styled.div`
	position: absolute;
	display: flex;
	top: -3.75rem;
	height: 100px;

	img {
		object-fit: none;
	}
`

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const NameText = styled.span`
	color: var(--dark-blue);
	font-size: 1.75rem;
	font-weight: bold;
`;

export const IdText = styled.span`
	color: var(--dark-gray);
	font-size: 0.8rem;
	font-weight: bold;
	margin-top: 1.5rem;
`;

const Button = styled.button`
	padding: 0.25rem;
	font-weight: bold;
	border-radius: 0.4rem;
`;

export const MoreInfoButton = styled(Button)`
	color: var(--dark-blue);
	background: var(--white);
	border: 1px solid var(--dark-blue);

	&:hover {
		color: var(--light-gray);
		background: var(--dark-blue);
	}
`;

export const PokedexButton = styled(Button)`
	color: var(--red);
	background: var(--white);
	border: 1px solid var(--red);

	&:hover {
		color: var(--light-gray);
		background: var(--red);
	}
`;