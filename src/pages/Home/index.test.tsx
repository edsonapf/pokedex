import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from ".";
import PokeApiService from "../../services/PokeApiService";
import { PokemonList } from "../../types/Pokemon";
import { mockContent } from "../../utils/consts";
import HtmlUtils from "../../utils/HtmlUtils";

const mockReturn: PokemonList = {
  next: null,
  previous: null,
  pokemons: [mockContent],
};

describe("Home page", () => {
  beforeAll(() => {
    HtmlUtils.setModalDiv();
  });

  test("Should render when is loading", async () => {
    render(<Home />);

    await waitFor(() => {
      const loading = screen.getByText("Loading...");
      expect(loading).toBeInTheDocument();
    });
  });

  test("Should render when is pokemon list has been loaded", async () => {
    PokeApiService.listAll = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockReturn));
    render(<Home />);

    const pokemonId = await screen.findByText("Nº 999");
    const pokemonName = await screen.findByText("Pokemon Name");
    const pokemonType = await screen.findByText("GRASS");
    const moreInfoButton = await screen.findByRole("button", {
      name: /More info/i,
    });
    const addToPokedexButton = await screen.findByRole("button", {
      name: /\+ Pokedex/i,
    });

    expect(pokemonId).toBeInTheDocument();
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType).toBeInTheDocument();
    expect(moreInfoButton).toBeInTheDocument();
    expect(addToPokedexButton).toBeInTheDocument();
  });

  test("Should render pokemon list and open more info modal", async () => {
    PokeApiService.listAll = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockReturn));
    render(<Home />);

    const moreInfoButton = await screen.findByRole("button", {
      name: /More info/i,
    });
    expect(moreInfoButton).toBeInTheDocument();
    userEvent.click(moreInfoButton);

    const pokemonId = screen.getByText("# 999");
    const ability = screen.getByText("ABILITY");
    const height = screen.getByText("30m");
    const weight = screen.getByText("10.5kg");
    const atkText = screen.getByText("ATK");
    const atkValue = screen.getByText("70");

    expect(pokemonId).toBeInTheDocument();
    expect(ability).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(atkText).toBeInTheDocument();
    expect(atkValue).toBeInTheDocument();
  });

  test("Should render pokemon list, open and close more info modal", async () => {
    PokeApiService.listAll = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockReturn));
    render(<Home />);

    const moreInfoButton = await screen.findByRole("button", {
      name: /More info/i,
    });
    expect(moreInfoButton).toBeInTheDocument();
    userEvent.click(moreInfoButton);

    const pokemonId = screen.getByText("# 999");
    const ability = screen.getByText("ABILITY");
    const height = screen.getByText("30m");
    const weight = screen.getByText("10.5kg");
    const atkText = screen.getByText("ATK");
    const atkValue = screen.getByText("70");
    expect(pokemonId).toBeInTheDocument();
    expect(ability).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(atkText).toBeInTheDocument();
    expect(atkValue).toBeInTheDocument();

    const backdrop = screen.getByTestId("backdrop");
    userEvent.click(backdrop);

    expect(backdrop).not.toBeInTheDocument();
  });
});
