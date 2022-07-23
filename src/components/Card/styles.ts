import styled from 'styled-components';

export const Container = styled.div`
	border-radius: 1.5rem;
	background: ${({ theme }) => theme.cardBackgroundColor};
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-shadow: 2px 2px 10px -6px rgba(0,0,0,0.6);
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
	color: ${({ theme }) => theme.textColor};
	font-size: 1.75rem;
	font-weight: bold;
`;

export const IdText = styled.span`
	color: ${({ theme }) => theme.idTextColor};
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
	color: ${({ theme }) => theme.textColor};
	background: ${({ theme }) => theme.cardBackgroundColor};
	border: 1px solid ${({ theme }) => theme.textColor};

	&:hover {
		color: ${({ theme }) => theme.backgroundColor};
		background: ${({ theme }) => theme.textColor};
	}
`;

export const PokedexButton = styled(Button)`
	color: #ff5350;
	background: ${({ theme }) => theme.cardBackgroundColor};
	border: 1px solid #ff5350;

	&:hover {
		color: ${({ theme }) => theme.backgroundColor};
		background: #ff5350;
	}
`;