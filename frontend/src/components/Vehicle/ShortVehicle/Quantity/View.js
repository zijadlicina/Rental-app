import React, { useState } from "react";
import "./Quantity.css";

function Quantity() {
  let val = 1;
  return (
    <div className="quantity">
      <input type="number" value={val}></input>
    </div>
  );
}

export default Quantity;
