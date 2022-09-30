import React from "react";
import "./Items.css";

import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

import ItemsSlider from "./ItemsSlider/ItemsSlider";
import LinearItems from "./LinearItems/LinearItems";

function Items({ view, bikes }) {
  if (view === 1) {
    return (
      <div className="content">
        <ItemsSlider items={bikes}/>
      </div>
    );
  }
  return (
    /* two options f25 and f100*/
    <div className="content">
      <div className="items">
        <LinearItems items={bikes} view={view}  />
      </div>
    </div>
  );
}

export default Items;
