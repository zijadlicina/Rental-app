import React, { useEffect, useState } from 'react'
import { BsCalendar2Date } from "react-icons/bs";
import "./DatePicker.css"

function DatePicker({date, setDate, id}) {
  console.log("date picker,", date)
  const dateHandler = (e) => {
    console.log("Nesto")
    e.preventDefault();
    setDate(e.target.value)
  }

  return (
    <div className="datepicker-date">
      <div className='divicon'>
        <BsCalendar2Date className="icon" />
      </div>
      <input type="date" value={date} id={id} onChange={dateHandler}/>
    </div>
  );
}

export default DatePicker