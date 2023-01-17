import React, { useState } from "react";
import "./Quantity.css";

function Quantity({quantityInput, setQuantityInput}) {
  const quantityHandler = (e) => {
    setQuantityInput(e.target.value)
  }
  return (
    <div className="quantity">
      <input type="number" value={quantityInput} onChange={(e) => quantityHandler(e)}></input>
    </div>
  );
}

export default Quantity;
