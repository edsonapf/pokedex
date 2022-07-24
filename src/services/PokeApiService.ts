import { PokemonAbility, PokemonList } from '../types/Pokemon';
import RequestConverter from '../utils/RequestConverter';
import { api } from './api';

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


export default class PokeApiService {

	static async listAll(offset: number = 0, limit: number = 20): Promise<PokemonList> {
		const listResponse: AxiosListRequest = await api.get('/pokemon', {
			params: {
				offset,
				limit,
			},
		});
		const PokemonDetailsRequest = listResponse.data.results.map((result) => {
			const splittedUrl: string[] = result.url.split('/');
			const id = splittedUrl[splittedUrl.length - 2];
			
			return this.getByIdOrName(id);
		})
		const pokemonsDetail: GetByIdOrNameRequest[] = await Promise.all(PokemonDetailsRequest);
		const formattedPokemonDetails = pokemonsDetail.map((detail: GetByIdOrNameRequest) => RequestConverter.toPokemonDetails(detail));

		return RequestConverter.toPokemonList(listResponse.data, formattedPokemonDetails);
	}

	static async getByIdOrName(pathParam: string): Promise<GetByIdOrNameRequest> {
		const response: AxiosGetByIdOrNameRequest = await api.get(`/pokemon/${pathParam.toLowerCase()}`);

		return response.data
	}

}
