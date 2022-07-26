import { PokemonAbility } from "./Pokemon";

export interface AxiosListRequest {
	data: ListRequest;
}

export interface ListRequest {
	next: string | null;
	previous: string | null;
	results: Result[];
}

export interface Result {
	name: string;
	url: string;
}

export interface AxiosGetByIdOrNameRequest {
	data: GetByIdOrNameRequest;
}

export interface GetByIdOrNameRequest {
	abilities: Ability[];
	height: number;
	id: number;
	name: string;
	sprites: Sprite;
	stats: Stat[];
	types: Type[];
	weight: number;
}

export interface Ability {
	ability: PokemonAbility;
}

export interface Sprite {
	front_default: string;
	versions: Versions;
}

export interface Stat {
	base_stat: number;
	stat: {
		name: string;
	}
}

export interface Type {
	type: {
		name: string;
	}
}

export interface Versions {
	"generation-v": {
		"black-white": {
			animated: {
				front_default: string;
			}
		}
	}
}