import {
  ButtonsContainer,
  Container,
  FiltersContainer,
  PageButton,
  PokeballIcon,
} from "./styles";
import Card from "../../components/Card";
import InfoCard from "../../components/InfoCard";
import SearchBar from "../../components/SearchBar";
import PokemonListContainer from "../../components/PokemonListContainer";
import { useEffect, useMemo, useState } from "react";
import { PokemonDetails, PokemonList } from "../../types/Pokemon";
import PokeApiService from "../../services/PokeApiService";
import Chip from "../../components/Chip";
import RequestConverter from "../../utils/RequestConverter";
import { EmptyPokedexContainer, EmptyPokedexText } from "../Pokedex/styles";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";

const defaultPokemonList: PokemonList = {
  next: null,
  previous: null,
  pokemons: [],
};

function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [isFilteredByName, setIsFilteredByName] = useState(false);
  const [page, setPage] = useState(1);
  const [pokemonList, setPokemonList] = useState(defaultPokemonList);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(
    null
  );

  const isModalOpen = useMemo(() => !!selectedPokemon, [selectedPokemon]);

  useEffect(() => {
    listAll();
  }, []);

  const handleNextPage = () => {
    if (pokemonList.next) {
      const { offset, limit } = getOffsetAndLimitFromUrl(pokemonList.next);
      listAll(offset, limit);
      setPage((prev) => prev + 1);
    }
  };

  const handleBackPage = () => {
    if (pokemonList.previous) {
      const { offset, limit } = getOffsetAndLimitFromUrl(pokemonList.previous);
      listAll(offset, limit);
      setPage((prev) => prev - 1);
    }
  };

  const listAll = async (offset: number = 0, limit: number = 20) => {
    setIsLoading(true);
    const response = await PokeApiService.listAll(offset, limit);
    setPokemonList(response);
    setIsLoading(false);
  };

  const getOffsetAndLimitFromUrl = (url: string) => {
    const allQueryParams = url.split("?")[1];
    const individualQueryParams = allQueryParams.split("&");
    const offset = individualQueryParams[0].match(/\d+/);
    const limit = individualQueryParams[1].match(/\d+/);

    if (offset && limit) {
      return {
        offset: Number(offset[0]),
        limit: Number(limit[0]),
      };
    }

    return {
      offset: 0,
      limit: 20,
    };
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSearchButtonPress = async () => {
    if (pokemonName) {
      try {
        setIsLoading(true);
        const response = await PokeApiService.getByIdOrName(pokemonName);
        const formattedPokemonList: PokemonList = {
          next: null,
          previous: null,
          pokemons: [RequestConverter.toPokemonDetails(response)],
        };
        setIsFilteredByName(true);
        setPokemonList(formattedPokemonList);
      } catch {
        toast.error("Pokemon not found", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleRemoveSearch = () => {
    setIsFilteredByName(false);
    setPokemonName("");
    listAll();
  };

  return (
    <Container>
      {isModalOpen && (
        <Modal onCloseModal={() => setSelectedPokemon(null)}>
          <InfoCard content={selectedPokemon!} />
        </Modal>
      )}
      <SearchBar
        value={pokemonName}
        onInputChange={handleSearchChange}
        onSearchButtonPress={handleSearchButtonPress}
      />
      <FiltersContainer>
        <ButtonsContainer>
          <PageButton
            className="button-container-child"
            disabled={!pokemonList.previous}
            onClick={handleBackPage}
          >
            {"<"}
          </PageButton>
          <PageButton className="button-container-child" disabled>
            {page}
          </PageButton>
          <PageButton
            className="button-container-child"
            disabled={!pokemonList.next}
            onClick={handleNextPage}
          >
            {">"}
          </PageButton>
        </ButtonsContainer>
        {isFilteredByName && (
          <Chip text={pokemonName} onRemoveChip={handleRemoveSearch} />
        )}
      </FiltersContainer>
      <div style={{ paddingTop: "2rem" }}>
        {/* TODO: Change EmptyPokedexContainer */}
        {isLoading ? (
          <EmptyPokedexContainer>
            <PokeballIcon />
            <EmptyPokedexText>Loading...</EmptyPokedexText>
          </EmptyPokedexContainer>
        ) : (
          <PokemonListContainer>
            {pokemonList.pokemons.map((pokemon: PokemonDetails) => {
              return (
                <Card
                  content={pokemon}
                  key={pokemon.name}
                  showAddToPokedexButton
                  onMoreInfoButtonPress={() => setSelectedPokemon(pokemon)}
                />
              );
            })}
            {/* <div style={{ marginTop: 100 }}>
              <InfoCard content={pokemonDetail} />
            </div> */}
          </PokemonListContainer>
        )}
      </div>
    </Container>
  );
}

export default Home;
