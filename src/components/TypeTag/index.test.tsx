import { render, screen } from "@testing-library/react";
import TypeTag from ".";

const text = "Pokemon list container";
const defaultProps = {
  backgroundColor: "#fff",
  fontColor: "#000",
  className: "typeTagClassName",
};

describe("TypeTag component", () => {
  it("Should render child", () => {
    const { backgroundColor, fontColor, className } = defaultProps;
    render(
      <TypeTag
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        className={className}
      >
        {text}
      </TypeTag>
    );
    const textTag = screen.getByTestId("type-tag");
    const textChild = screen.getByText(text);

    expect(textTag).toBeInTheDocument();
    expect(textChild).toBeInTheDocument();
  });

  it("Should render empty child", () => {
    const { backgroundColor, fontColor, className } = defaultProps;
    render(
      <TypeTag
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        className={className}
      >
        {""}
      </TypeTag>
    );
    const textChild = screen.queryByText(text);
    expect(textChild).not.toBeInTheDocument();
  });
});
