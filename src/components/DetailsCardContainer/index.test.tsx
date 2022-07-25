import { render, screen } from "@testing-library/react";
import DetailsCardContainer from ".";

const text = "Details card container";

describe("DetailsCardContainer component", () => {
  test("Should render child", () => {
    render(<DetailsCardContainer>{text}</DetailsCardContainer>);
    const textChild = screen.getByText(text);
    expect(textChild).toBeInTheDocument();
  });

  test("Should render empty child", () => {
    render(<DetailsCardContainer>{""}</DetailsCardContainer>);
    const textChild = screen.queryByText(text);
    expect(textChild).not.toBeInTheDocument();
  });
});
