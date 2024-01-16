import React from "react";
import { Button } from "../../atoms/button";
import { FeatherIcon } from "../../atoms/feather_icon";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: IPaginationProps) {
  const canPreviousPage = currentPage > 0;
  const canNextPage = currentPage < totalPages - 1;

  const onPrevClick = () => {
    if (canPreviousPage) {
      onPageChange(currentPage - 1);
    }
  };

  const onNextClick = () => {
    if (canNextPage) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <div className="flex ml-60 flex-row w-full gap-8 h-full items-end">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => onPrevClick()}
        disabled={!canPreviousPage}
        leadingIcon={<FeatherIcon name="ArrowLeft" color="#5A6575" size={20} />}
        className="flex items-center gap-4 justify-center min-w-fit"
      >
        Previous
      </Button>
      {totalPages <= 7 ? (
        pageNumbers.map((page) => (
          <Button
            key={page}
            variant="secondary"
            size="xs"
            onClick={() => onPageChange(page)}
            className={page === currentPage ? "bg-gray-dfe3e9" : ""}
          >
            {page + 1}
          </Button>
        ))
      ) : (
        <>
          {pageNumbers.slice(0, 3).map((page) => (
            <Button
              key={page}
              variant="secondary"
              size="xs"
              onClick={() => onPageChange(page)}
              className={page === currentPage ? "bg-gray-dfe3e9" : ""}
            >
              {page + 1}
            </Button>
          ))}
          <Button
            key={3}
            variant="secondary"
            size="xs"
            onClick={() => onPageChange(3)}
            className={currentPage > 2 && currentPage < pageNumbers.length - 3 ? "bg-gray-dfe3e9" : ""}
          >
            ...
          </Button>
          {pageNumbers.slice(-3).map((page) => (
            <Button
              key={page}
              variant="secondary"
              size="xs"
              onClick={() => onPageChange(page)}
              className={page === currentPage ? "bg-gray-dfe3e9" : ""}
            >
              {page + 1}
            </Button>
          ))}
        </>
      )}
      <Button
        variant="secondary"
        size="sm"
        onClick={() => onNextClick()}
        disabled={!canNextPage}
        trailingIcon={<FeatherIcon name="ArrowRight" color="#5A6575" size={20} />}
        className="flex items-center gap-4 justify-center min-w-fit"
      >
        Next
      </Button>
    </div>
  );
}
