import { render, screen } from "@testing-library/react";
import Modal from ".";
import HtmlUtils from "../../utils/HtmlUtils";

const text = "Modal render";
const onCloseModal = () => {};

describe("Modal component", () => {
  beforeAll(() => {
    HtmlUtils.setModalDiv();
  });

  test("Should render modal with child", () => {
    render(<Modal onCloseModal={onCloseModal}>{text}</Modal>);

    const textChild = screen.getByText(text);

    expect(textChild).toBeInTheDocument();
  });

  test("Should render modal with empty child", () => {
    render(<Modal onCloseModal={onCloseModal}>{""}</Modal>);

    const textChild = screen.queryByText(text);

    expect(textChild).not.toBeInTheDocument();
  });
});
