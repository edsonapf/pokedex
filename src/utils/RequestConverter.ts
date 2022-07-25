import { Ability, GetByIdOrNameRequest, ListRequest, Stat, Type } from "../services/PokeApiService";
import { PokemonDetails, PokemonList, PokemonStats } from "../types/Pokemon";
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
    const defaultImageUrl = "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png";
    const imageLastIndexOfUrl = fullDetail.sprites.front_default?.lastIndexOf('http');
    const imageUrl = imageLastIndexOfUrl >= 0 ? fullDetail.sprites.front_default.substring(imageLastIndexOfUrl) : defaultImageUrl;
    const animatedImageLastIndexOfUrl = fullDetail.sprites.versions["generation-v"]["black-white"].animated.front_default?.lastIndexOf('http');
    const animatedUrl = animatedImageLastIndexOfUrl >= 0 ? fullDetail.sprites.versions["generation-v"]["black-white"].animated.front_default.substring(animatedImageLastIndexOfUrl) : imageUrl;
    const isDefaultImage = imageUrl === defaultImageUrl;
    return {
      id: fullDetail.id,
      name: fullDetail.name,
      image: imageUrl,
      animatedImage: animatedUrl,
      isDefaultImage,
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
      stats: fullDetail.stats.map((stat: Stat) => ({
          name: NameConverter.convertStatName(stat.stat.name),
          color: ColorSelector.getColorByStat(stat.stat.name),
          value: stat.base_stat,
        })).filter((stat: PokemonStats) => stat.name !== 'TTL')
    }

  }
}

export default RequestConverter;