import { AxiosGetByIdOrNameRequest, AxiosListRequest, GetByIdOrNameRequest } from '../types/PokeApi';
import { PokemonList } from '../types/Pokemon';
import RequestConverter from '../utils/RequestConverter';
import { api } from './api';
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
