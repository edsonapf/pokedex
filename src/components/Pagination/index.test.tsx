import { render, screen } from "@testing-library/react";
import Pagination from ".";

const defaultProps = {
  lastPage: 10,
  currentPage: 3,
  onChangePage() {},
};

describe("Pagination component", () => {
  it("Should render all buttons", () => {
    const { lastPage, currentPage, onChangePage } = defaultProps;
    render(
      <Pagination
        lastPage={lastPage}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    );

    const goToFirstPage = screen.getByText("|<");
    const backPage = screen.getByText("<");
    const pageMinus1 = screen.getByText("2");
    const page = screen.getByText("3");
    const pagePlus1 = screen.getByText("4");
    const nextPage = screen.getByText(">");
    const goToLastPage = screen.getByText(">|");

    expect(goToFirstPage).toBeInTheDocument();
    expect(backPage).toBeInTheDocument();
    expect(pageMinus1).toBeInTheDocument();
    expect(page).toBeInTheDocument();
    expect(pagePlus1).toBeInTheDocument();
    expect(nextPage).toBeInTheDocument();
    expect(goToLastPage).toBeInTheDocument();
  });

  it("Should not render back and first page buttons", () => {
    const { lastPage, onChangePage } = defaultProps;
    render(
      <Pagination
        lastPage={lastPage}
        currentPage={1}
        onChangePage={onChangePage}
      />
    );

    const goToFirstPage = screen.queryByText("|<");
    const backPage = screen.queryByText("<");
    const page = screen.getByText("1");
    const pagePlus1 = screen.getByText("2");
    const pagePlus2 = screen.getByText("3");
    const nextPage = screen.getByText(">");
    const goToLastPage = screen.getByText(">|");

    expect(goToFirstPage).not.toBeInTheDocument();
    expect(backPage).not.toBeInTheDocument();
    expect(page).toBeInTheDocument();
    expect(pagePlus1).toBeInTheDocument();
    expect(pagePlus2).toBeInTheDocument();
    expect(nextPage).toBeInTheDocument();
    expect(goToLastPage).toBeInTheDocument();
  });

  it("Should not render next and last page buttons", () => {
    const { lastPage, onChangePage } = defaultProps;
    render(
      <Pagination
        lastPage={lastPage}
        currentPage={lastPage}
        onChangePage={onChangePage}
      />
    );

    const goToFirstPage = screen.getByText("|<");
    const backPage = screen.getByText("<");
    const page = screen.getByText("10");
    const pagePlus1 = screen.getByText("9");
    const pagePlus2 = screen.getByText("8");
    const nextPage = screen.queryByText(">");
    const goToLastPage = screen.queryByText(">|");

    expect(goToFirstPage).toBeInTheDocument();
    expect(backPage).toBeInTheDocument();
    expect(page).toBeInTheDocument();
    expect(pagePlus1).toBeInTheDocument();
    expect(pagePlus2).toBeInTheDocument();
    expect(nextPage).not.toBeInTheDocument();
    expect(goToLastPage).not.toBeInTheDocument();
  });
});
