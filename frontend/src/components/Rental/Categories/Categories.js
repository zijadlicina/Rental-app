import React from "react";
import { useState } from "react";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import "./Categories.css";

function Categories({ changeCategory, changePage }) {
  const [active, setActive] = useState(1);
  return (
    <div className="categories">
      <ul>
        <li>
          <p
            className={active === 1 ? "active" : "cat"}
            onClick={() => {
              setActive(1);
              changeCategory("all");
              changePage(1);
            }}
          >
            All
          </p>
        </li>
        <li>
          <p
            className={active === 2 ? "active" : "cat"}
            onClick={() => {
              setActive(2);
              changeCategory("bike");
              changePage(1);
            }}
          >
            Bike
          </p>
        </li>
        <li>
          <p
            className={active === 3 ? "active" : "cat"}
            onClick={() => {
              setActive(3);
              changeCategory("scooter");
              changePage(1);
            }}
          >
            Scooter
          </p>
        </li>
        <li>
          <p
            className={active === 4 ? "active" : "cat"}
            onClick={() => {
              setActive(4);
              changeCategory("e-bike");
              changePage(1);
            }}
          >
            E-Bike
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
