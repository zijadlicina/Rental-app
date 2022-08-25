import React from 'react'
import "../Rental.css"

import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { RiCodeView } from "react-icons/ri";

function ViewItems({view, setView}) {
  return (
    <div className="view">
      <div>
        <RiCodeView
          className={view === 1 ? "active" : null}
          onClick={() => setView(1)}
        />
      </div>
      <div>
        <HiOutlineViewGrid
          className={view === 2 ? "active" : null}
          onClick={() => setView(2)}
        />
      </div>
      <div>
        <HiOutlineViewList
          className={view === 3 ? "active" : null}
          onClick={() => setView(3)}
        />
      </div>
    </div>
  );
}

export default ViewItems