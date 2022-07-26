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
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import EmptyOrLoadingContainer from "../../components/EmptyOrLoadingContainer";

const defaultPokemonList: PokemonList = {
  next: null,
  previous: null,
  pokemons: [],
};

const OFFSET_PAGE = 20;

function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [isFilteredByName, setIsFilteredByName] = useState(false);
  const [page, setPage] = useState(1);
  const [pokemonList, setPokemonList] = useState(defaultPokemonList);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(
    null
  );

  const isModalOpen = useMemo(() => !!selectedPokemon, [selectedPokemon]);

  useEffect(() => {
    const offset = (page - 1) * OFFSET_PAGE;
    listAll(offset);
  }, [page]);

  const handleNextPage = async () => {
    if (pokemonList.next) {
      setPage((prev) => prev + 1);
    }
  };

  const handleBackPage = async () => {
    if (pokemonList.previous) {
      setPage((prev) => prev - 1);
    }
  };

  const listAll = async (offset: number = 0, limit: number = 20) => {
    setIsLoading(true);
    const response = await PokeApiService.listAll(offset, limit);
    setPokemonList(response);
    setIsLoading(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSearchButtonPress = async () => {
    if (pokemonName) {
      try {
        setSearchedPokemon(pokemonName);
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
        setSearchedPokemon("");
        setIsFilteredByName(false);
        const offset = (page - 1) * 20;
        listAll(offset);
        toast.error("Pokemon not found", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } finally {
        setPokemonName("");
        setIsLoading(false);
      }
    }
  };

  const handleRemoveSearch = () => {
    setIsFilteredByName(false);
    setPokemonName("");
    setSearchedPokemon("");
    const offset = (page - 1) * 20;
    listAll(offset);
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
        {!isFilteredByName && (
          <ButtonsContainer>
            {!!pokemonList.previous && (
              <PageButton
                className="button-container-child"
                disabled={!pokemonList.previous}
                onClick={handleBackPage}
              >
                {"<"}
              </PageButton>
            )}
            <PageButton className="button-container-child" disabled>
              {page}
            </PageButton>
            {!!pokemonList.next && (
              <PageButton
                className="button-container-child"
                disabled={!pokemonList.next}
                onClick={handleNextPage}
              >
                {">"}
              </PageButton>
            )}
          </ButtonsContainer>
        )}
        {isFilteredByName && (
          <Chip text={searchedPokemon} onRemoveChip={handleRemoveSearch} />
        )}
      </FiltersContainer>
      <div style={{ paddingTop: "2rem" }}>
        {isLoading ? (
          <EmptyOrLoadingContainer text="Loading...">
            <PokeballIcon isLoadingIcon />
          </EmptyOrLoadingContainer>
        ) : pokemonList.pokemons.length > 0 ? (
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
          </PokemonListContainer>
        ) : (
          <EmptyOrLoadingContainer text="There is no pokemons">
            <PokeballIcon />
          </EmptyOrLoadingContainer>
        )}
      </div>
    </Container>
  );
}

export default Home;
