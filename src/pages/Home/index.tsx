import { Container, ContentContainer } from "./styles";
import pokemonList from "../../mocks/pokemon_list.json";
import Card from "../../components/Card";
import InfoCard from "../../components/InfoCard";
import pokemonDetail from "../../mocks/pokemon_detail.json";
import SearchBar from "../../components/SearchBar";

export type PokemonDetail = typeof pokemonDetail;
export type PokemonSimpleData = typeof pokemonList[0];

function Home() {
  return (
    <Container>
      <SearchBar />
      <ContentContainer>
        {pokemonList.map((pokemon) => {
          return <Card content={pokemon} key={pokemon.name} />;
        })}
        <div style={{ marginTop: 100 }}>
          <InfoCard content={pokemonDetail} />
        </div>
      </ContentContainer>
    </Container>
  );
}

export default Home;
