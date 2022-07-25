import { render, screen } from "@testing-library/react";
import Chip from ".";

const defaultProps = {
  text: "Chip test",
  onRemoveChip: () => {
    return;
  },
};

describe("Chip component", () => {
  test('Should contains the following text "chip test"', () => {
    render(
      <Chip text={defaultProps.text} onRemoveChip={defaultProps.onRemoveChip} />
    );
    const chipText = screen.getByText("chip test");
    expect(chipText).toBeInTheDocument();
  });

  test("Should contains a button", () => {
    render(
      <Chip text={defaultProps.text} onRemoveChip={defaultProps.onRemoveChip} />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
