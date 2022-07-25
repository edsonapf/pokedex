import { PokemonDetails } from "../types/Pokemon";

export const mockContent: PokemonDetails = {
  id: 999,
  name: "pokemon name",
  image: "some_url",
  animatedImage: "some_url",
  isDefaultImage: false,
  types: [{ name: "grass", backgroundColor: "#fff", color: "#000" }],
  abilities: [{ name: "ability" }],
  height: 30,
  weight: 10.5,
  stats: [{ name: "ATK", color: "#aaa", value: 70 }],
};