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
import StringUtils from "../../utils/StringUtils";
import { useContext } from "react";
import { PokedexContext } from "../../context/PokedexContext";
import { PokemonDetails } from "../../types/Pokemon";

interface CardProps {
  content: PokemonDetails;
  key?: string;
  showAddToPokedexButton?: boolean;
  showRemoveFromPokedexButton?: boolean;
  onMoreInfoButtonPress: () => void;
}

function Card({
  content,
  key = "",
  showAddToPokedexButton = false,
  showRemoveFromPokedexButton = false,
  onMoreInfoButtonPress,
}: CardProps) {
  const { addToPokedex, removeFromPokedex } = useContext(PokedexContext);

  return (
    <Container key={key}>
      <ImageContainer>
        <img src={content.animatedImage || content.image} alt={content.name} />
      </ImageContainer>
      <InfoContainer>
        <IdText>Nº {content.id}</IdText>
        <NameText>{StringUtils.formatNameCamelCase(content.name)}</NameText>
        <DetailsCardContainer>
          {content.types.map((type) => {
            return (
              <TypeTag
                key={type.name}
                backgroundColor={type.backgroundColor}
                fontColor={type.color}
                className="details-card-container-child"
              >
                {type.name.toUpperCase()}
              </TypeTag>
            );
          })}
        </DetailsCardContainer>
        <DetailsCardContainer>
          <MoreInfoButton
            className="details-card-container-child"
            onClick={onMoreInfoButtonPress}
          >
            More info
          </MoreInfoButton>
          {showAddToPokedexButton && (
            <PokedexButton
              className="details-card-container-child"
              onClick={() => addToPokedex(content)}
            >
              + Pokedex
            </PokedexButton>
          )}
          {showRemoveFromPokedexButton && (
            <PokedexButton
              className="details-card-container-child"
              onClick={() => removeFromPokedex(content.id)}
            >
              - Pokedex
            </PokedexButton>
          )}
        </DetailsCardContainer>
      </InfoContainer>
    </Container>
  );
}

export default Card;
