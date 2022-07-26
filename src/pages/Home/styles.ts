import styled from 'styled-components';
import { ReactComponent as PokeballIconSvg } from "../../assets/icons/pokeball.svg";

interface PokeballIconProps {
	$isLoadingIcon?: boolean;
}

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
`;

export const PokeballIcon = styled(PokeballIconSvg)<PokeballIconProps>`
	width: 3rem;
	height: 3rem;
  margin-bottom: 1rem;
  fill: #777;
	animation: ${({ $isLoadingIcon }) => $isLoadingIcon ? 'rotation 2s infinite linear' : 'none' };
	
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
`;