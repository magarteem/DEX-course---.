import ReactPaginate from "react-paginate";
import "./Pagination.scss";

interface PaginationProps {
  initialPage?: number;
  marginPagesDisplayed?: number;
  pageCount?: number | any; // разобрать
  pageRangeDisplayed?: number;
  onChange: ({ selected }: { selected: number }) => void;
}
export const Pagination: React.FC<PaginationProps> = ({
  initialPage,
  marginPagesDisplayed,
  pageCount,
  pageRangeDisplayed,
  onChange,
}) => {
  return (
    <ReactPaginate
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onChange}
      containerClassName="Pagination"
      activeClassName="Pagination__active"
      pageLinkClassName="Pagination__page-link"
      breakLinkClassName="Pagination__break-link"
      nextLinkClassName="Pagination__next-link"
      previousLinkClassName="Pagination__previous-link"
      pageClassName="Pagination__page-item"
      breakClassName="Pagination__break-item"
      nextClassName="Pagination__next-item"
      previousClassName="Pagination__previous-item"
    />
  );
};
