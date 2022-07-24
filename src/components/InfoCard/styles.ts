import styled from 'styled-components';

interface StatTypeTextProps {
	background: string;
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	width: 20rem;
	border-radius: 2rem;
	background: var(--white);
	position: relative;
	box-shadow: var(--box-shadow);

	height: 27rem;
	padding: 1rem;
`;

export const ImageContainer = styled.div`
	position: absolute;
	display: flex;
	top: -7.5rem;
	height: 300px;

	img {
		height: auto;
		width: auto;
		max-height: 200px;
	}
`

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const IdText = styled.span`
	color: var(--dark-gray);
	font-size: 1rem;
	font-weight: bold;
	margin-top: 1.5rem;
`;

export const NameText = styled.span`
	color: var(--dark-blue);
	font-size: 2rem;
	font-weight: bold;
`;

export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const DetailText = styled.span`
	color: var(--dark-blue);
	font-weight: bold;
`

export const DetailTitleText = styled(DetailText)`
	font-size: 1.2rem;
`;

export const DetailSection = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	margin: 0.5rem 0;
	flex-wrap: wrap;

	span:not(:nth-child(1), :nth-child(2)) {
		margin-top: 0.5rem;
	}
`;

export const DetailValueText = styled(DetailText)`
	background: #f6f8fc;
	padding: 0.5rem 0;
	font-size: 1rem;
	border-radius: 1rem;
	border: 1px solid #90b3cc;
	text-align: center;
	width: 8rem;
`;

export const HeightWeightContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
`;

export const StatBubble = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 4rem;
	width: 2rem;
	border-radius: 1rem;
	background: var(--light-gray);
	padding: 0 0.1rem
`;

export const StatTypeText = styled.span<StatTypeTextProps>`
	border-radius: 1rem;
	color: var(--white);
	background: ${({ background }) => background};
	width: 100%;
	font-size: 0.7rem;
	text-align: center;
	font-weight: bold;
	padding: 0.5rem 0;
`;

export const StatValueText = styled.span`
	color: var(--dark-blue);
	font-size: 1rem;
	text-align: center;
	font-weight: bold;
`;