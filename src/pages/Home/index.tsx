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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

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
        setPage(1);
      } catch {
        setSearchedPokemon("");
        setIsFilteredByName(false);
        const offset = (page - 1) * 20;
        listAll(offset);
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
    setSearchedPokemon("");
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
          <Chip text={searchedPokemon} onRemoveChip={handleRemoveSearch} />
        )}
      </FiltersContainer>
      <div style={{ paddingTop: "2rem" }}>
        {/* TODO: Change EmptyPokedexContainer */}
        {isLoading ? (
          <EmptyOrLoadingContainer text="Loading...">
            <PokeballIcon />
          </EmptyOrLoadingContainer>
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
          </PokemonListContainer>
        )}
      </div>
    </Container>
  );
}

export default Home;
