import {
  Container,
  IdText,
  MoreInfoButton,
  NameText,
  TypeContainer,
  TypeText,
} from "./styles";

const TYPE = [
  { name: "GRASS", backgroundColor: "#A8F082", color: "#669F4E" },
  { name: "GROUND", backgroundColor: "#FFCD82", color: "#98693D" },
  { name: "GROUND", backgroundColor: "#FFCD82", color: "#98693D" },
];

const gif =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif";

function PokemonGrid() {
  return (
    <Container>
      <img src={gif} alt="pokemon gif" />
      <IdText>Nº 13</IdText>
      <NameText>Turtwig</NameText>
      <TypeContainer>
        {TYPE.map((type) => {
          return (
            <TypeText
              backgroundColor={type.backgroundColor}
              fontColor={type.color}
            >
              {type.name}
            </TypeText>
          );
        })}
      </TypeContainer>
      <MoreInfoButton>More info</MoreInfoButton>
    </Container>
  );
}

export default PokemonGrid;
