import React from "react";
import "../Rental.css";

import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

import Item from "./Item/Item";
import ItemsSlider from "./ItemsSlider/ItemsSlider";

function Items({ dropDownFilter, setDropDownFilter, view }) {
  if (view === 1){
    return (
    <div className="content">
      <ItemsSlider />
    </div>
    )
  }
  return (
    <div className="content">
      <div className={"items-list"}>
        <Item view={view} />
        <Item view={view} />
        <Item view={view} />
        <Item view={view} />
        <Item view={view} />
        <Item view={view} />
        <Item view={view} />
        <Item view={view} />
        <Item view={view} />
        <Item view={view} />
        <Item view={view} />
        <Item view={view} />
      </div>
      <div
        className={dropDownFilter ? "dropdown-filter" : "dropdown-filterNone"}
      >
        <TbLayoutSidebarLeftExpand
          className="filter-icon"
          onClick={() => setDropDownFilter(!dropDownFilter)}
        />
        <div className="filter-content"></div>
      </div>
    </div>
  );
}

export default Items;
