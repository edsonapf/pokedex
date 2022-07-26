import { render, screen } from "@testing-library/react";
import EmptyOrLoadingContainer from ".";

const defaultChild = "EmptyOrLoadingContainer";
const defaultTextProp = "You do not have item";

describe("EmptyOrLoadingContainer component", () => {
  it("Should render child and text prop", () => {
    render(
      <EmptyOrLoadingContainer text={defaultTextProp}>
        {defaultChild}
      </EmptyOrLoadingContainer>
    );
    const child = screen.getByText(defaultChild);
    const text = screen.getByText(defaultTextProp);

    expect(child).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
