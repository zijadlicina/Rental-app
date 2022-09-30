import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./HourPicker.css"

function HourPicker({ hour }) {
  return (
    <div className="hourinput-hour">
      <div className="divicon">
        <AiOutlineClockCircle className="icon" />
      </div>
      <input type="number" value={hour} />
      <input type="number" value={hour} />
    </div>
  );
}

export default HourPicker;
