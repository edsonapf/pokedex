import {
  Container,
  EmptyPokedexContainer,
  EmptyPokedexText,
  PokeballIcon,
} from "./styles";
import PokemonListContainer from "../../components/PokemonListContainer";
import Card from "../../components/Card";
import { useContext } from "react";
import { PokedexContext } from "../../context/PokedexContext";

function Pokedex() {
  const { pokedex } = useContext(PokedexContext);

  return (
    <Container>
      {pokedex.length > 0 ? (
        <PokemonListContainer>
          {pokedex.map((pokemon) => {
            return (
              <Card
                content={pokemon}
                key={pokemon.name}
                showRemoveFromPokedexButton
              />
            );
          })}
        </PokemonListContainer>
      ) : (
        <EmptyPokedexContainer>
          <PokeballIcon />
          <EmptyPokedexText>
            You do not have pokemon in your pokedex
          </EmptyPokedexText>
        </EmptyPokedexContainer>
      )}
    </Container>
  );
}

export default Pokedex;
