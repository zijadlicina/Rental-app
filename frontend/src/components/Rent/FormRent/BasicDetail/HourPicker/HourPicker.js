import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./HourPicker.css"
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

function HourPicker({ time, setTime, id }) {
  const timeHandler = (e) => {
    e.preventDefault();
    setTime(e.target.value)
  }

  return (
    <div className="hourinput-hour">
      <div className="divicon">
        <AiOutlineClockCircle className="icon" />
      </div>
      <input className="non" type="string" />
      <input className="timeInput" type="time" value={time} id={id} onChange={(e) => timeHandler(e)} />
    </div>
  );
}

export default HourPicker;
