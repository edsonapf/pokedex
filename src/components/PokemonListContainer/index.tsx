import { ReactNode } from "react";
import { Container } from "./styles";

interface PokemonListContainerProps {
  children: ReactNode;
}

function PokemonListContainer({ children }: PokemonListContainerProps) {
  return <Container>{children}</Container>;
}

export default PokemonListContainer;
