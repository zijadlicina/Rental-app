import React, { useEffect } from "react";
import "../../Rental.css";

import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { RiCodeView } from "react-icons/ri";

function ViewItems({ view, setView, changePage, changeLimit, dimensions }) {
  
  return (
    <div className="view">
      {dimensions < 600 ?
      <div>
        <RiCodeView
          className={view === 1 ? "slider-view active" : "slider-view"}
          onClick={() => {
            setView(1);
            changePage(1);
            changeLimit(20);
          }}
        />
      </div>
      : null}
      {dimensions > 600 ?
      <div>
        <HiOutlineViewList
          className={view === 3 ? "active list-view" : "list-view"}
          onClick={() => {
            setView(3);
            changePage(1);
            changeLimit(3);
          }}
        />
      </div>
      : null}
       <div>
        <HiOutlineViewGrid
          className={view === 2 ? "active grid-view" : "grid-view"}
          onClick={() => {
            setView(2);
            changePage(1);
            changeLimit(8);
          }}
        />
      </div>
    </div>
  );
}

export default ViewItems;
