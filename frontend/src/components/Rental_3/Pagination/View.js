import "./Pagination.css";
import { useState, useEffect } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Pagination = ({ page, pages, setPage, limit }) => {
  if (pages > 1) {
    return (
      <div className="pagination-rental">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          <AiOutlineDoubleLeft />
        </button>
        {/* middle buttons */}
        <MiddleButtons page={page} pages={pages} setPage={setPage} limit={limit}/>
        {/* middle buttons */}
        <button disabled={page === pages} onClick={() => setPage(page + 1)}>
          <AiOutlineDoubleRight />
        </button>
      </div>
    );
  }
};

const MiddleButtons = ({ page, pages, setPage, limit }) => {
  const middle = new Array(limit).fill("");
  let x = Math.ceil(page / 5) * 5;

  return middle.map((btn, idx) => {
    let value = x + 1 + idx - 5;
    if (value > pages) return  null;
    return <button className={page === value ? "current" : null} onClick={() => setPage(value)}>{value}</button>;
  });
};
export default Pagination;
