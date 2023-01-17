import React from "react";
import moment from "moment"

function TimeItem({item}) {
  if (!item) return(
    <p>Loading...</p>
  )
  else return (
      <div className="row">
        <div className="graphic">
          <div className={item.date ? "circle active" : "circle"}></div>
          <div className="line"></div>
        </div>
        <div className="text">
          <div className="head">{item.text}</div>
          {item.date ? 
          <div className="sub">{new Date(item.date).toLocaleString("en-GB", { timeZone: 'Europe/London' })} - 7100 Sarajevo</div>
          : null}
        </div>
      </div>
  );
}

export default TimeItem;
