import React from "react";
import "./LinearItems.css";

import Item from './Item'

function LinearItems({ items, view, getCategory, setErrorRent}) {
  return items.map((item) => {
    return (
      <Item key={item._id} item={item} view={view} getCategory={getCategory} 
      setErrorRent={setErrorRent}/>
    );
  });
}

export default LinearItems;
