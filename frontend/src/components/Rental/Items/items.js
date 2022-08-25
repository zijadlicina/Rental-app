import React, { useState } from "react";
import Item from "./Item/item";
import ItemModal from "./Item/ItemModal/itemModal";
import { Alert } from "antd";

const Items = ({ category, items, isAuthenticated }) => {
  const [counter, setCounter] = useState(0);
  const [alert, setAlert] = useState(false);
  const increase = () => {
    setCounter((prev) => {
      if (prev === items.length - 1) return 0;
      return prev + 1;
    });
  };
  const descrease = () => {
    setCounter((prev) => {
      if (prev === 0) return items.length - 1;
      return prev - 1;
    });
  };
  const rentHandler = () => {
    if (!isAuthenticated) {
      setAlert(!alert);
    }
  };
  const prevItem = () => {
     if (counter === 0) return items[items.length - 1];
      return items[counter - 1];
  }
  const nextItem = () => {
    if (counter === items.length - 1) return items[0];
    return items[counter + 1];
  }
  console.log(items)
  return (
    <div>
      {alert ? (
        <Alert style={{marginTop: "60px"}} type="error" message="Please login or register!" />
      ) : null}
      <Item
        item={items[counter]}
        increase={increase}
        decrease={descrease}
        rentHandler={rentHandler}
        itemPrev={prevItem()}
        itemNext={nextItem()}
      />
    </div>
  );
};

export default Items;
