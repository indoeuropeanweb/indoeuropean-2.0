"use client";
import { useMemo, useState } from "react";

const usePagination = (items = [], itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = useMemo(() => {
    return Math.ceil(items.length / itemsPerPage);
  }, [items.length, itemsPerPage]);

  const currentPageItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  const moveForward = () => {
    setCurrentPage((prevPage) =>
      prevPage < pages ? prevPage + 1 : prevPage
    );
  };

  const moveBackward = () => {
    setCurrentPage((prevPage) =>
      prevPage > 1 ? prevPage - 1 : prevPage
    );
  };

  return {
    pages,
    currentPageItems,
    currentPage,
    setCurrentPage,
    moveForward,
    moveBackward,
  };
};

export default usePagination;