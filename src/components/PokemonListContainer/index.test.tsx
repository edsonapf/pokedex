import { render, screen } from "@testing-library/react";
import PokemonListContainer from ".";

const text = "Pokemon list container";

describe("PokemonListContainer component", () => {
  it("Should render child", () => {
    render(<PokemonListContainer>{text}</PokemonListContainer>);
    const textChild = screen.getByText(text);
    expect(textChild).toBeInTheDocument();
  });

  it("Should render empty child", () => {
    render(<PokemonListContainer>{""}</PokemonListContainer>);
    const textChild = screen.queryByText(text);
    expect(textChild).not.toBeInTheDocument();
  });
});
