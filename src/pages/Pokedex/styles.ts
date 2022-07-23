import styled from 'styled-components';
import { ReactComponent as PokeballIconSvg } from "../../assets/icons/pokeball.svg";

export const Container = styled.main`
  width: 100%;
`;

export const EmptyPokedexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.cardBackgroundColor};
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 10px -6px rgba(0,0,0,0.6);
`;

export const EmptyPokedexText = styled.span`
  font-size: 1.5rem;
  color: inherit;
  color: #777;
  font-weight: bold;
`;

export const PokeballIcon = styled(PokeballIconSvg)`
	width: 3rem;
	height: 3rem;
  margin-bottom: 1rem;
  fill: #777;
`;