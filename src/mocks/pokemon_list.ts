// [
// 	{
// 		"id": 395,
// 		"name": "Empoleaon",
// 		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/395.gif",
// 		"types": [
// 			{ "name": "GRASS", "backgroundColor": "#A8F082", "color": "#669F4E" },
// 			{ "name": "GROUND", "backgroundColor": "#FFCD82", "color": "#98693D" }
// 		]
// 	},
// 	{
// 		"id": 1,
// 		"name": "bulbasaur",
// 		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
// 		"types": [
// 			{ "name": "GRASS", "backgroundColor": "#A8F082", "color": "#669F4E" },
// 			{ "name": "GROUND", "backgroundColor": "#FFCD82", "color": "#98693D" }
// 		]
// 	},
// 	{
// 		"id": 2,
// 		"name": "ivysaur",
// 		"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
// 		"types": [
// 			{ "name": "GRASS", "backgroundColor": "#A8F082", "color": "#669F4E" },
// 			{ "name": "GROUND", "backgroundColor": "#FFCD82", "color": "#98693D" }
// 		]
// 	}
// ]

import { PokemonList } from "../types/Pokemon";
import { pokemonDetails } from "./pokemon_detail";

export const pokemonList: PokemonList = {
	lastPage: 1,
	next: "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20",
  previous: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
	pokemons: [
		pokemonDetails
	],
};