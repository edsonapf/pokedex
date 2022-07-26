export interface PokemonList {
  lastPage: number;
  next: string | null;
  previous: string | null;
  pokemons: PokemonDetails[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  image: string;
  animatedImage: string;
  isDefaultImage: boolean;
  types: PokemonTypes[];
  abilities: PokemonAbility[];
  height: number;
  weight: number;
  stats: PokemonStats[];
}

export interface PokemonTypes {
  name: string;
  backgroundColor: string;
  color: string;
}

export interface PokemonAbility {
  name: string;
}

export interface PokemonStats {
  name: string;
  value: number;
  color: string;
}