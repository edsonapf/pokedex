import {
  Container,
  EmptyPokedexContainer,
  EmptyPokedexText,
  PokeballIcon,
} from "./styles";
import PokemonListContainer from "../../components/PokemonListContainer";
import Card from "../../components/Card";
import { useContext, useEffect, useMemo, useState } from "react";
import { PokedexContext } from "../../context/PokedexContext";
import { PokemonDetails } from "../../types/Pokemon";
import Modal from "../../components/Modal";
import InfoCard from "../../components/InfoCard";

function Pokedex() {
  const { pokedex } = useContext(PokedexContext);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(
    null
  );

  const isModalOpen = useMemo(() => !!selectedPokemon, [selectedPokemon]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <Container className={isModalOpen ? "modal-open" : ""}>
      {isModalOpen && (
        <Modal onCloseModal={() => setSelectedPokemon(null)}>
          <InfoCard content={selectedPokemon!} />
        </Modal>
      )}
      {pokedex.length > 0 ? (
        <PokemonListContainer>
          {pokedex.map((pokemon) => {
            return (
              <Card
                content={pokemon}
                key={pokemon.name}
                showRemoveFromPokedexButton
                onMoreInfoButtonPress={() => setSelectedPokemon(pokemon)}
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
