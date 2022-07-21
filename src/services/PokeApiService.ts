import { api } from './api'

export default class PokeApiService {

	static async listAll(limit: number, offset: number) {
		const response = await api.get('/pokemon', {
			params: {
				...(limit && { limit }),
				...(offset && { offset })
			}
		});

		return response.data;
	}

	static async getById(id: number) {
		const response = await api.get(`/pokemon/${id}`);

		return response.data
	}

}
