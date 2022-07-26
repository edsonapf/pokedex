import { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";
import { PokemonDetails } from "../types/Pokemon";

interface PokedexProviderProps {
  children: ReactNode;
}

interface PokedexContextProps {
  pokedex: PokemonDetails[];
  addToPokedex: (pokemon: PokemonDetails) => void;
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
  const [pokedex, setPokedex] = useLocalStorage<PokemonDetails[]>(
    "pokedex",
    []
  );

  const addToPokedex = (pokemon: PokemonDetails) => {
    setPokedex((prevPokedex) => {
      if (pokemonIsAlreadyInPokedex(prevPokedex, pokemon)) {
        toast.info("Pokemon is already in your pokedex", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        return prevPokedex;
      }
      toast.success("Pokemon has been added in your pokedex", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return [...prevPokedex, pokemon];
    });
  };

  const pokemonIsAlreadyInPokedex = (
    pokedex: PokemonDetails[],
    pokemon: PokemonDetails
  ) => {
    return pokedex.find((item) => item.id === pokemon.id);
  };

  const removeFromPokedex = (pokemonId: number) => {
    toast.success("Pokemon has been removed from your pokedex", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
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
