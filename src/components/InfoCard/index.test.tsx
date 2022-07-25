import { render, screen } from "@testing-library/react";
import InfoCard from ".";
import { mockContent } from "../../utils/consts";

describe("InfoCard component", () => {
  test("Should render all content data", () => {
    render(<InfoCard content={mockContent} />);

    const id = screen.getByText("# 999");
    const name = screen.getByText("Pokemon Name");
    const image = screen.getByRole("img");
    const type = screen.getByText("GRASS");
    const ability = screen.getByText("ABILITY");
    const height = screen.getByText("30m");
    const weight = screen.getByText("10.5kg");
    const stat = screen.getByText("ATK");

    expect(id).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(ability).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(stat).toBeInTheDocument();
  });

  test("Should not contains type tag", () => {
    const mockWithoutTypes = { ...mockContent, types: [] };
    render(<InfoCard content={mockWithoutTypes} />);

    const typeTag = screen.queryByTestId("type-tag");

    expect(typeTag).not.toBeInTheDocument();
  });

  test("Should not contains detail value text", () => {
    const mockWithoutTypes = { ...mockContent, abilities: [] };
    render(<InfoCard content={mockWithoutTypes} />);

    const detailValueText = screen.queryByTestId("detail-value-text");

    expect(detailValueText).not.toBeInTheDocument();
  });

  test("Should not contains stats", () => {
    const mockWithoutTypes = { ...mockContent, stats: [] };
    render(<InfoCard content={mockWithoutTypes} />);

    const stat = screen.queryByTestId("stat-bubble");

    expect(stat).not.toBeInTheDocument();
  });
});
