import React from "react";
import TimeItem from "./TimeItem";
import "./Timeline.css"
function Timeline() {
  return (
    <div className="timeline">
      <TimeItem />
      <TimeItem />
      <TimeItem />
      <TimeItem />
    </div>
  );
}

export default Timeline;
