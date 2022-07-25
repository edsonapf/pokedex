import { render, screen } from "@testing-library/react";
import PokemonListContainer from ".";

const text = "Pokemon list container";

describe("PokemonListContainer component", () => {
  test("Should render child", () => {
    render(<PokemonListContainer>{text}</PokemonListContainer>);
    const textChild = screen.getByText(text);
    expect(textChild).toBeInTheDocument();
  });

  test("Should render empty child", () => {
    render(<PokemonListContainer>{""}</PokemonListContainer>);
    const textChild = screen.queryByText(text);
    expect(textChild).not.toBeInTheDocument();
  });
});
