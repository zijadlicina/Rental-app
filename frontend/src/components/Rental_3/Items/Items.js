import React from "react";
import "./Items.css";

import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

import Item from "./Item/Item";
import ItemsSlider from "./ItemsSlider/ItemsSlider";
import LinearItems from "./LinearItems/LinearItems";
const items = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

function Items({ view }) {
  if (view === 1) {
    return (
      <div className="content">
        <ItemsSlider />
      </div>
    );
  }
  return (
    /* two options f25 and f100*/
    <div className="content">
      <div className="items">
        <LinearItems items={items} view={view} />
      </div>
    </div>
  );
}

export default Items;
