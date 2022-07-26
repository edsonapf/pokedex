import { render, screen } from "@testing-library/react";
import SearchBar from ".";

const defaultProps = {
  onInputChange: () => {},
  onSearchButtonPress: () => {},
  value: "pokemon",
};

describe("SearchBar component", () => {
  it("Should render all children", () => {
    const { onInputChange, onSearchButtonPress } = defaultProps;
    render(
      <SearchBar
        onInputChange={onInputChange}
        onSearchButtonPress={onSearchButtonPress}
        value=""
      />
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should have value on input", () => {
    const { onInputChange, onSearchButtonPress, value } = defaultProps;
    render(
      <SearchBar
        onInputChange={onInputChange}
        onSearchButtonPress={onSearchButtonPress}
        value={value}
      />
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    const inputValue = screen.getByDisplayValue("pokemon");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(inputValue).toBeInTheDocument();
  });
});
