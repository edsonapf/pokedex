import { Ability, GetByIdOrNameRequest, ListRequest, Stat, Type } from "../services/PokeApiService";
import { PokemonDetails, PokemonList } from "../types/Pokemon";
import ColorSelector from "./ColorSelector";
import NameConverter from "./NameConverter";

class RequestConverter {

  static toPokemonList(simpleDetail: ListRequest, pokemons: PokemonDetails[]): PokemonList {
    return {
      next: simpleDetail.next,
      previous: simpleDetail.previous,
      pokemons,
    };
  }

  static toPokemonDetails(fullDetail: GetByIdOrNameRequest): PokemonDetails {
    return {
      id: fullDetail.id,
      name: fullDetail.name,
      image: fullDetail.sprites.front_default,
      animatedImage: fullDetail.sprites.versions["generation-v"]["black-white"].animated.front_default,
      types: fullDetail.types.map((type: Type) => {
        const { backgroundColor, color } = ColorSelector.getColorsByPokemonType(type.type.name.toUpperCase());
        return {
        name: type.type.name,
        backgroundColor,
        color,
      }}),
      abilities: fullDetail.abilities.map((ability: Ability) => ({
        name: ability.ability.name,
      })),
      height: fullDetail.height,
      weight: fullDetail.weight,
      stats: fullDetail.stats.map((stat: Stat) => {
        // TODO: remove other stats
        return {
          name: NameConverter.convertStatName(stat.stat.name),
          color: ColorSelector.getColorByStat(stat.stat.name),
          value: stat.base_stat,
        }
      })
    }

  }
}

export default RequestConverter;