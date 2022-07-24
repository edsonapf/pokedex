import styled from 'styled-components';
import { ReactComponent as PokeballIconSvg } from "../../assets/icons/pokeball.svg";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	width: 100;
	padding-top: 2rem;
`;

export const FiltersContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 2rem
`

export const ButtonsContainer = styled.div`
	.button-container-child:not(:first-child) {
		margin-left: 0.3rem;
	}
`;

export const PageButton = styled.button`
		background: var(--white);
		color: var(--red);
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

export const PokeballIcon = styled(PokeballIconSvg)`
	width: 3rem;
	height: 3rem;
  margin-bottom: 1rem;
  fill: #777;
	animation: rotation 2s infinite linear;
	
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
`;