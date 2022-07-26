import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pokedex from ".";
import { PokedexContext } from "../../context/PokedexContext";
import { mockContent } from "../../utils/consts";

const defaultContext = {
  pokedex: [mockContent],
  addToPokedex() {},
  removeFromPokedex() {},
};

describe("Pokedex page", () => {
  test("Should render with empty list", () => {
    render(<Pokedex />);

    const emptyText = screen.getByText(
      "You do not have pokemon in your pokedex"
    );

    expect(emptyText).toBeInTheDocument();
  });

  test("Should render one item from pokedex", () => {
    render(
      <PokedexContext.Provider value={defaultContext}>
        <Pokedex />
      </PokedexContext.Provider>
    );

    const pokemonId = screen.getByText("Nº 999");
    const pokemonName = screen.getByText("Pokemon Name");
    const pokemonType = screen.getByText("GRASS");
    const moreInfoButton = screen.getByRole("button", { name: /More info/i });
    const removeFromPokedexButton = screen.getByRole("button", {
      name: /- Pokedex/i,
    });

    expect(pokemonId).toBeInTheDocument();
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType).toBeInTheDocument();
    expect(moreInfoButton).toBeInTheDocument();
    expect(removeFromPokedexButton).toBeInTheDocument();
  });

  test("Should render pokemon more detail modal", () => {
    const container = document.createElement("div");
    container.setAttribute("id", "modal-root");
    document.body.append(container);

    render(
      <PokedexContext.Provider value={defaultContext}>
        <Pokedex />
      </PokedexContext.Provider>
    );

    const moreInfoButton = screen.getByRole("button", { name: /More info/i });
    expect(moreInfoButton).toBeInTheDocument();
    userEvent.click(moreInfoButton);

    const atkText = screen.getByText("ATK");
    const atkValue = screen.getByText("70");

    expect(atkText).toBeInTheDocument();
    expect(atkValue).toBeInTheDocument();
  });

  test("Should close pokemon more detail modal", () => {
    const container = document.createElement("div");
    container.setAttribute("id", "modal-root");
    document.body.append(container);

    render(
      <PokedexContext.Provider value={defaultContext}>
        <Pokedex />
      </PokedexContext.Provider>
    );

    const moreInfoButton = screen.getByRole("button", { name: /More info/i });
    expect(moreInfoButton).toBeInTheDocument();
    userEvent.click(moreInfoButton);

    const atkText = screen.getByText("ATK");
    const atkValue = screen.getByText("70");
    expect(atkText).toBeInTheDocument();
    expect(atkValue).toBeInTheDocument();

    const backdrop = screen.getByTestId("backdrop");
    userEvent.click(backdrop);

    expect(backdrop).not.toBeInTheDocument();
  });
});
