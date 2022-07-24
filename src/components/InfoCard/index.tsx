import { PokemonDetails } from "../../types/Pokemon";
import StringUtils from "../../utils/StringUtils";
import DetailsCardContainer from "../DetailsCardContainer";
import TypeTag from "../TypeTag";
import {
  Container,
  HeightWeightContainer,
  IdText,
  ImageContainer,
  InfoContainer,
  NameText,
  DetailsContainer,
  DetailSection,
  DetailTitleText,
  DetailValueText,
  StatBubble,
  StatTypeText,
  StatValueText,
} from "./styles";

interface InfoCardProps {
  content: PokemonDetails;
}

function InfoCard({ content }: InfoCardProps) {
  return (
    <Container>
      <ImageContainer>
        <img src={content.image} alt={content.name} />
      </ImageContainer>
      <InfoContainer>
        <IdText># {content.id}</IdText>
        <NameText>{StringUtils.toFirstCharUpperCase(content.name)}</NameText>
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
        <DetailsContainer>
          <DetailTitleText>ABILITIES</DetailTitleText>
          <DetailSection>
            {content.abilities.map((ability) => {
              return (
                <DetailValueText key={ability.name}>
                  {ability.name}
                </DetailValueText>
              );
            })}
          </DetailSection>
        </DetailsContainer>
        <HeightWeightContainer>
          <DetailsContainer>
            <DetailTitleText>HEIGHT</DetailTitleText>
            <DetailSection>
              <DetailValueText>{content.height}m</DetailValueText>
            </DetailSection>
          </DetailsContainer>
          <DetailsContainer>
            <DetailTitleText>WEIGHT</DetailTitleText>
            <DetailSection>
              <DetailValueText>{content.weight}kg</DetailValueText>
            </DetailSection>
          </DetailsContainer>
        </HeightWeightContainer>
        <DetailsContainer>
          <DetailTitleText>STATS</DetailTitleText>
          <HeightWeightContainer>
            {content.stats.map((stat) => {
              return (
                <StatBubble key={stat.name}>
                  <StatTypeText background={stat.color}>
                    {stat.name}
                  </StatTypeText>
                  <StatValueText>{stat.value}</StatValueText>
                </StatBubble>
              );
            })}
          </HeightWeightContainer>
        </DetailsContainer>
      </InfoContainer>
    </Container>
  );
}

export default InfoCard;
