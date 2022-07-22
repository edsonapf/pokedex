import TypeTag from "../TypeTag";
import DetailsCardContainer from "../DetailsCardContainer";
import {
  Container,
  IdText,
  ImageContainer,
  InfoContainer,
  MoreInfoButton,
  NameText,
  PokedexButton,
} from "./styles";
import "../../mocks/pokemon_list.json";
import { PokemonSimpleData } from "../../pages/Home";
import StringUtils from "../../utils/StringUtils";

interface CardProps {
  content: PokemonSimpleData;
}

function Card({ content }: CardProps) {
  return (
    <Container>
      <ImageContainer>
        <img src={content.image} alt={content.name} />
      </ImageContainer>
      <InfoContainer>
        <IdText>Nº {content.id}</IdText>
        <NameText>{StringUtils.formatNameCamelCase(content.name)}</NameText>
        <DetailsCardContainer>
          {content.types.map((type) => {
            return (
              <TypeTag
                backgroundColor={type.backgroundColor}
                fontColor={type.color}
                className="details-card-container-child"
              >
                {type.name}
              </TypeTag>
            );
          })}
        </DetailsCardContainer>
        <DetailsCardContainer>
          <MoreInfoButton className="details-card-container-child">
            More info
          </MoreInfoButton>
          <PokedexButton className="details-card-container-child">
            + Pokedex
          </PokedexButton>
        </DetailsCardContainer>
      </InfoContainer>
    </Container>
  );
}

export default Card;
