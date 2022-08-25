import React, { useState } from 'react'
import "./Actions.css"

import ViewItems from "./ViewItems/ViewItems";
import { MdSort } from "react-icons/md";

/* icon for expand and close filter div*/
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import { BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";

function Actions({view, setView}) {
  const [dropDownFilter, setDropDownFilter] = useState(false)
  return (
    <div className="actions">
      <div className="row-1">
        <div className="sort">
          <label htmlFor="sort">
            <MdSort />
          </label>
          <select name="sort" id="sort">
            <option value="name">Sort By Name</option>
            <option value="price">Sort By Price</option>
            <option value="recommand">Sort By Recommand</option>
          </select>
        </div>
        <div className="search">
          <input
            type="text"
            id="search"
            name="search"
            placeholder={"Search"}
          ></input>
        </div>
        {/* Different types of viewing items (liear, blocks, slider) */}
        <ViewItems view={view} setView={setView} />
      </div>
      <div className="row-filter-icon">
        <span>FILTER</span>
        {!dropDownFilter ? (
          <BiUpArrowCircle
            className="filter-icon"
            onClick={() => setDropDownFilter(!dropDownFilter)}
          />
        ) : (
          <BiDownArrowCircle
            className="filter-icon"
            onClick={() => setDropDownFilter(!dropDownFilter)}
          />
        )}
      </div>
      <div
        className={dropDownFilter ? "row-filter" : "row-filter-display"}
      ></div>
    </div>
  );
}

export default Actions