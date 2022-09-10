import React from "react";
import "./Items.css";

import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

import ItemsSlider from "./ItemsSlider/ItemsSlider";
import LinearItems from "./LinearItems/LinearItems";

function Items({ view, bikes, getCategory }) {
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
        <LinearItems items={bikes} view={view} getCategory={getCategory} />
      </div>
    </div>
  );
}

export default Items;
