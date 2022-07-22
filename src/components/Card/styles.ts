import styled from 'styled-components';

interface TypeTextProps {
	backgroundColor: string;
	fontColor: string;
}

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
	width: 17rem;
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

export const TypeContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0.5rem 0 0.75rem 0;

	span + span {
		margin-left: 0.25rem;
	}
`;

export const TypeText = styled.span<TypeTextProps>`
	color: ${({ fontColor }) => fontColor};
	font-size: 0.75rem;
	background: ${({ backgroundColor }) => backgroundColor};
	font-weight: bold;
	border-radius: 0.25rem;
	padding: 0.25rem;
`;

export const MoreInfoButton = styled.button`
	color: ${({ theme }) => theme.textColor};
	background: ${({ theme }) => theme.cardBackgroundColor};
	border: 1px solid ${({ theme }) => theme.textColor};
	padding: 0.25rem;
	font-weight: bold;
	border-radius: 0.25rem;

	&:hover {
		color: ${({ theme }) => theme.backgroundColor};
		background: ${({ theme }) => theme.textColor};
		cursor: pointer;
	}
`;