import React from "react";
import "../../Rental.css";

import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { RiCodeView } from "react-icons/ri";

function ViewItems({ view, setView, changePage, changeLimit }) {
  return (
    <div className="view">
      <div>
        <RiCodeView
          className={view === 1 ? "active" : null}
          onClick={() => {
            setView(1);
            changePage(1);
            changeLimit(8);
          }}
        />
      </div>
      <div>
        <HiOutlineViewGrid
          className={view === 2 ? "active" : null}
          onClick={() => {
            setView(2);
            changePage(1);
            changeLimit(8);
          }}
        />
      </div>
      <div>
        <HiOutlineViewList
          className={view === 3 ? "active" : null}
          onClick={() => {
            setView(3);
            changePage(1);
            changeLimit(3);
          }}
        />
      </div>
    </div>
  );
}

export default ViewItems;
