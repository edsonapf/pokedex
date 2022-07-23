import { ButtonsContainer, Container, PageButton } from "./styles";
import pokemonList from "../../mocks/pokemon_list.json";
import Card from "../../components/Card";
// import InfoCard from "../../components/InfoCard";
import pokemonDetail from "../../mocks/pokemon_detail.json";
import SearchBar from "../../components/SearchBar";
import PokemonListContainer from "../../components/PokemonListContainer";
import { useState } from "react";

export type PokemonDetail = typeof pokemonDetail;
export type PokemonSimpleData = typeof pokemonList[0];

function Home() {
  const [pokemonSearch, setPokemonSearch] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonSearch(event.target.value);
  };

  console.log({ pokemonSearch });

  return (
    <Container>
      <SearchBar onInputChange={handleSearchChange} />
      <ButtonsContainer>
        <PageButton className="button-container-child">{"<<"}</PageButton>
        <PageButton className="button-container-child">{"<"}</PageButton>
        <PageButton className="button-container-child" disabled>
          1
        </PageButton>
        <PageButton className="button-container-child">{">"}</PageButton>
        <PageButton className="button-container-child">{">>"}</PageButton>
      </ButtonsContainer>
      <PokemonListContainer>
        {pokemonList.map((pokemon) => {
          return (
            <Card content={pokemon} key={pokemon.name} showAddToPokedexButton />
          );
        })}
        {/* <div style={{ marginTop: 100 }}>
          <InfoCard content={pokemonDetail} />
        </div> */}
      </PokemonListContainer>
    </Container>
  );
}

export default Home;
