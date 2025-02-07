import ReactPaginate from "react-paginate";
import css from "./BasePagination.module.css";

export default function BasePagination({
  handlePageChange,
  totalPages,
  currentPage,
}) {
  return (
    <div className={css.pagination}>
      <button
        disabled={currentPage === 0}
        onClick={() => handlePageChange({ selected: 0 })}
        className={css.paginationButton}
      >
        <svg className={css.paginationArrowdouble}>
          <use href="/sprite.svg#double-left-arrow" />
        </svg>
      </button>

      <button
        disabled={currentPage === 0}
        onClick={() => handlePageChange({ selected: currentPage - 1 })}
        className={css.paginationButton}
      >
        <svg className={css.paginationArrow}>
          <use href="/sprite.svg#left-arrow" />
        </svg>
      </button>

      <ReactPaginate
        onPageChange={handlePageChange}
        pageCount={totalPages}
        forcePage={currentPage}
        containerClassName={css.paginationBlock}
        activeClassName={css.paginationActive}
        disabledClassName={css.paginationDisabled}
        pageClassName={css.paginationPage}
        breakClassName={css.paginationBreak}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        breakLabel="..."
        nextLabel={null}
        previousLabel={null}
        renderOnZeroPageCount={null}
      />

      <button
        disabled={currentPage === totalPages - 1}
        onClick={() => handlePageChange({ selected: currentPage + 1 })}
        className={css.paginationButton}
      >
        <svg className={css.paginationArrow}>
          <use href="/sprite.svg#right-arrow" />
        </svg>
      </button>

      <button
        disabled={currentPage === totalPages - 1}
        onClick={() => handlePageChange({ selected: totalPages - 1 })}
        className={css.paginationButton}
      >
        <svg className={css.paginationArrowdouble}>
          <use href="/sprite.svg#double-right-arrow" />
        </svg>
      </button>
    </div>
  );
}
