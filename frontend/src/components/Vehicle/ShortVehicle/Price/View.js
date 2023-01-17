import React, { useState } from "react";
import "./Price.css";

function Price({price}) {
  return <div className="price-vehicle">${price} USD</div>;
}

export default Price;
