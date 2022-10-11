import React from "react";

function TimeItem() {
  return (
    <div className="row">
      <div className="graphic">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <div className="text">
        <div className="head">The shipment has arrived at the terminal.</div>
        <div className="sub">March 23 at 08.20 - 7100 SARAJEVO</div>
      </div>
    </div>
  );
}

export default TimeItem;
