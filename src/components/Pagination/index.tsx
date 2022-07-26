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

  const getPagesByAvailableAmount = useCallback(
    (availablePagesAmount: number) => {
      const numberPages = [];
      if (isFirstPage) {
        for (let i = 1; i <= availablePagesAmount; i++) {
          numberPages.push(i);
        }
        return numberPages;
      }

      if (isLastPage) {
        for (let i = availablePagesAmount - 1; i >= 0; i--) {
          numberPages.push(lastPage - i);
        }
        return numberPages;
      }

      return [currentPage - 1, currentPage, currentPage + 1];
    },
    [currentPage, lastPage, isFirstPage, isLastPage]
  );

  const pagesNumberToRender = useMemo(() => {
    const availablePagesAmount = lastPage > 3 ? 3 : lastPage;

    return getPagesByAvailableAmount(availablePagesAmount);
  }, [lastPage, getPagesByAvailableAmount]);

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
