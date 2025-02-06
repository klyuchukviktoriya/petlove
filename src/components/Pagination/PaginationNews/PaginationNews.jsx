"use client";
import { selectCurrentPage, selectTotalPages } from "@/redux/news/selectors";
import { setPage } from "@/redux/news/slice";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import css from "./PaginationNews.module.css";
import BasePagination from "@/components/Pagination/BasePagination/BasePagination";

export default function PaginationNews() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage) - 1;
  const totalPages = useSelector(selectTotalPages);

  const handlePageChange = ({ selected }) => {
    console.log("Changing to page:", selected + 1);
    dispatch(setPage(selected + 1));
  };

  return (
    <BasePagination
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
