import "./Pagination.css";
import { useState, useEffect } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useScrollTo, ScrollTo } from "react-use-window-scroll";

const Pagination = ({ page, pages, setPage, limit, setScrollTop }) => {

  const pageHandler = (type) => {
    if(type === "minus") {
      setPage(page - 1)
      setScrollTop()
    } else {
      setPage(page + 1);
      setScrollTop()
    }
  }

  if (pages > 1) {
    return (
      <div className="pagination-rental">
        <button disabled={page === 1} onClick={() => pageHandler("minus")}>
          <AiOutlineDoubleLeft />
        </button>
        {/* middle buttons */}
        <MiddleButtons
          page={page}
          pages={pages}
          setPage={setPage}
          limit={limit}
        />
        {/* middle buttons */}
        <button disabled={page === pages} onClick={() => pageHandler("plus")}>
          <AiOutlineDoubleRight />
        </button>
      </div>
    );
  } else {
    return <div className="pagination-rental"></div>;
  }
};
const MiddleButtons = ({ page, pages, setPage, limit }) => {
  const middle = new Array(limit).fill("");
  let x = Math.ceil(page / 5) * 5;

  return middle.map((btn, idx) => {
    let value = x + 1 + idx - 5;
    if (value > pages) return null;

    return <button className={page === value ? "current" : null} onClick={() => {   setPage(value);   }}>{value}</button>;
  });
};
export default Pagination;
