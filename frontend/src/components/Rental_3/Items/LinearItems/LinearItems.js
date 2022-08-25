import React from "react";
import "./LinearItems.css";

import Item from './Item/Item'

function LinearItems({ items, view }) {
  return (
    items.map((item) => {
      return <Item item={item} view={view}/>
    })
  )
}

export default LinearItems;
