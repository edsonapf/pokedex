import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from ".";

describe("NavBar component", () => {
  test("Should render all children", () => {
    render(<NavBar />, { wrapper: BrowserRouter });

    const navBar = screen.getByRole("navigation");
    const logo = screen.getByText("pokemon.svg");
    const home = screen.getByText("Home");
    const pokedex = screen.getByText("Pokedex");

    expect(navBar).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(pokedex).toBeInTheDocument();
  });
});
