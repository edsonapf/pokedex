import { useCallback, useMemo } from "react";
import { Button, Container } from "./styles";

interface PaginationProps {
  lastPage: number;
  currentPage: number;
  onChangePage: (lastPage: number) => void;
}

function Pagination({ lastPage, currentPage, onChangePage }: PaginationProps) {
  const isFirstPage = useMemo(() => currentPage === 1, [currentPage]);
  const isLastPage = useMemo(
    () => currentPage === lastPage,
    [currentPage, lastPage]
  );

  const pages = useMemo(
    () => Array.from({ length: lastPage }, (_, i) => i + 1),
    [lastPage]
  );

  const getPagesToShow = useCallback(
    (pagesAmountToShow: number) => {
      if (isFirstPage) {
        return pages.slice(0, pagesAmountToShow);
      }

      if (isLastPage) {
        return pages.slice(-pagesAmountToShow);
      }

      return [currentPage - 1, currentPage, currentPage + 1];
    },
    [currentPage, pages, isFirstPage, isLastPage]
  );

  const pagesNumberToRender = useMemo(() => {
    const pagesAmountToShow = lastPage > 3 ? 3 : lastPage;

    return getPagesToShow(pagesAmountToShow);
  }, [lastPage, getPagesToShow]);

  return (
    <Container>
      {!isFirstPage && (
        <>
          <Button
            className="button-container-child"
            onClick={() => onChangePage(1)}
          >
            {"|<"}
          </Button>
          <Button
            className="button-container-child"
            onClick={() => onChangePage(currentPage - 1)}
          >
            {"<"}
          </Button>
        </>
      )}
      {pagesNumberToRender.map((page) => (
        <Button
          key={page}
          className="button-container-child"
          onClick={() => onChangePage(page)}
          isCurrentPage={currentPage === page}
        >
          {page}
        </Button>
      ))}
      {!isLastPage && (
        <>
          <Button
            className="button-container-child"
            onClick={() => onChangePage(currentPage + 1)}
          >
            {">"}
          </Button>
          <Button
            className="button-container-child"
            onClick={() => onChangePage(lastPage)}
          >
            {">|"}
          </Button>
        </>
      )}
    </Container>
  );
}

export default Pagination;
