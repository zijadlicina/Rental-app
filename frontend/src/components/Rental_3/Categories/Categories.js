import React from "react";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import "./Categories.css";

function Categories({dropDownFilter, setDropDownFilter}) {
  return (
    <div className="categories">
      <ul>
        <li>
          <a className="active" href="#">
            All
          </a>
        </li>
        <li>
          <a href="#">Bikes</a>
        </li>
        <li>
          <a href="#">Scooter</a>
        </li>
        <li>
          <a href="#">E-Bikes</a>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
