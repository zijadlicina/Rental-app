import React from "react";
import "./LinearItems.css";

import Item from './Item/Item'

function LinearItems({ items, view, getCategory }) {
  return items.map((item) => {
    return (
      <Item key={item._id} item={item} view={view} getCategory={getCategory} />
    );
  });
}

export default LinearItems;
