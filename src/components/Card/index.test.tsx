import { render, screen } from "@testing-library/react";
import Card from ".";
import { mockContent } from "../../utils/consts";

const defaultProps = {
  content: mockContent,
  onMoreInfoButtonPress: () => {},
};

describe("Card component", () => {
  it("Should render all component", () => {
    const { content, onMoreInfoButtonPress } = defaultProps;
    render(
      <Card
        content={content}
        showAddToPokedexButton
        showRemoveFromPokedexButton
        onMoreInfoButtonPress={onMoreInfoButtonPress}
      />
    );

    const id = screen.getByText("Nº 999");
    const name = screen.getByText("Pokemon Name");
    const image = screen.getByRole("img");
    const type = screen.getByText("GRASS");
    const moreInfoButton = screen.getByRole("button", { name: /More info/i });
    const addPokedex = screen.getByRole("button", { name: /\+ Pokedex/i });
    const removePokedex = screen.getByRole("button", { name: /- Pokedex/i });

    expect(id).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(moreInfoButton).toBeInTheDocument();
    expect(addPokedex).toBeInTheDocument();
    expect(removePokedex).toBeInTheDocument();
  });

  it("Should not render remove from pokedex button and render add to pokedex button", () => {
    const { content, onMoreInfoButtonPress } = defaultProps;
    render(
      <Card
        content={content}
        showAddToPokedexButton
        onMoreInfoButtonPress={onMoreInfoButtonPress}
      />
    );
    const addPokedex = screen.getByRole("button", { name: /\+ Pokedex/i });
    const removePokedex = screen.queryByRole("button", { name: /- Pokedex/i });

    expect(addPokedex).toBeInTheDocument();
    expect(removePokedex).not.toBeInTheDocument();
  });

  it("Should not render add to pokedex button and render remove from pokedex button", () => {
    const { content, onMoreInfoButtonPress } = defaultProps;
    render(
      <Card
        content={content}
        showRemoveFromPokedexButton
        onMoreInfoButtonPress={onMoreInfoButtonPress}
      />
    );
    const addPokedex = screen.queryByRole("button", { name: /\+ Pokedex/i });
    const removePokedex = screen.getByRole("button", { name: /- Pokedex/i });

    expect(addPokedex).not.toBeInTheDocument();
    expect(removePokedex).toBeInTheDocument();
  });

  it("Should not render both add to pokedex button and remove from pokedex button", () => {
    const { content, onMoreInfoButtonPress } = defaultProps;
    render(
      <Card content={content} onMoreInfoButtonPress={onMoreInfoButtonPress} />
    );
    const addPokedex = screen.queryByRole("button", { name: /\+ Pokedex/i });
    const removePokedex = screen.queryByRole("button", { name: /- Pokedex/i });

    expect(addPokedex).not.toBeInTheDocument();
    expect(removePokedex).not.toBeInTheDocument();
  });
});
