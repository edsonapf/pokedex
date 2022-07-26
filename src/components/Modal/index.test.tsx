import { render, screen } from "@testing-library/react";
import Modal from ".";

const text = "Modal render";
const onCloseModal = () => {};

describe("Modal component", () => {
  test("Should render modal with child", () => {
    const container = document.createElement("div");
    container.setAttribute("id", "modal-root");
    document.body.append(container);

    render(<Modal onCloseModal={onCloseModal}>{text}</Modal>);

    const textChild = screen.getByText(text);

    expect(textChild).toBeInTheDocument();
  });

  test("Should render modal with empty child", () => {
    const container = document.createElement("div");
    container.setAttribute("id", "modal-root");
    document.body.append(container);

    render(<Modal onCloseModal={onCloseModal}>{""}</Modal>);

    const textChild = screen.queryByText(text);

    expect(textChild).not.toBeInTheDocument();
  });
});
