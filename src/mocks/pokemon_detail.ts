import { PokemonDetails } from "../types/Pokemon";

export const pokemonDetails: PokemonDetails = {
	"id": 395,
	"name": "empoleaon",
	"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png",
	"animatedImage": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/395.gif",
	"isDefaultImage": false,
	"types": [
		{ "name": "GRASS", "backgroundColor": "#A8F082", "color": "#669F4E" },
  		{ "name": "GROUND", "backgroundColor": "#FFCD82", "color": "#98693D" }
	],
	"abilities": [
		{ "name": "Torrent" },
		{ "name": "Defiant" }
	],
	"height": 1.7,
	"weight": 84.5,
	"stats": [
		{ "name": "HP", "value": 84, "color": "#df2140"  },
		{ "name": "ATK", "value": 86,  "color": "#ff994d" },
		{ "name": "DEF", "value": 88,  "color": "#ffdc41" },
		{ "name": "SPD", "value": 60,  "color": "#fb94a8" }
	]
};