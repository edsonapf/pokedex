import styled from 'styled-components';
import { ReactComponent as PokeballIconSvg } from "../../assets/icons/pokeball.svg";

export const Container = styled.main`
  width: 100%;
`;

export const PokeballIcon = styled(PokeballIconSvg)`
	width: 3rem;
	height: 3rem;
  margin-bottom: 1rem;
  fill: #777;
`;