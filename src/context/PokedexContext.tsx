import { createContext, ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { PokemonSimpleData } from "../pages/Home";

interface PokedexProviderProps {
  children: ReactNode;
}

interface PokedexContextProps {
  pokedex: PokemonSimpleData[];
  addToPokedex: (pokemon: PokemonSimpleData) => void;
  removeFromPokedex: (pokemonId: number) => void;
}

const defaultPokedexContextValues: PokedexContextProps = {
  pokedex: [],
  addToPokedex(_) {
    console.log("addToPokedex");
  },
  removeFromPokedex(_) {
    console.log("removeFromPokedex");
  },
};

export const PokedexContext = createContext<PokedexContextProps>(
  defaultPokedexContextValues
);

function PokedexProvider({ children }: PokedexProviderProps) {
  const [pokedex, setPokedex] = useLocalStorage<PokemonSimpleData[]>(
    "pokedex",
    []
  );

  const addToPokedex = (pokemon: PokemonSimpleData) => {
    setPokedex((prevPokedex) => {
      if (pokemonIsAlreadyInPokedex(prevPokedex, pokemon)) {
        return prevPokedex;
      }
      // TODO: add a toast
      return [...prevPokedex, pokemon];
    });
  };

  const pokemonIsAlreadyInPokedex = (
    pokedex: PokemonSimpleData[],
    pokemon: PokemonSimpleData
  ) => {
    return pokedex.find((item) => item.id === pokemon.id);
  };

  const removeFromPokedex = (pokemonId: number) => {
    setPokedex((prevPokedex) =>
      prevPokedex.filter((pokemon) => pokemon.id !== pokemonId)
    );
  };

  return (
    <PokedexContext.Provider
      value={{
        pokedex,
        addToPokedex,
        removeFromPokedex,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}

export default PokedexProvider;
