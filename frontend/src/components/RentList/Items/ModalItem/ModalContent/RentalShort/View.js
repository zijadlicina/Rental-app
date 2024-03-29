import React, { useEffect, useState } from "react";
import moment from "moment";
import { Rating } from "@mui/material";
const format1 = "YYYY-MM-DD HH:mm"

function RentalShort({ rental }) {
  const { _id, dateOut, dateReturned, quantity, price, status } =
    rental;
  return (
    <div className="col-a">
      <div className="row">
        <span className="head">About Rental</span>
      </div>
      <div className="row">
        <span className="title">id</span>
        <span className="field">{_id}</span>
      </div>
      <div className="row">
        <span className="title">Status</span>
        <span className="field">{status}</span>
      </div>
      <div className="row">
        <span className="title">date Out</span>
        <span className="field">{new Date(dateOut).toLocaleString("en-GB", { timeZone: 'Europe/London' })}</span>
      </div>
      <div className="row">
        <span className="title">date Returned</span>
        <span className="field">{new Date(dateReturned).toLocaleString("en-GB", { timeZone: 'Europe/London' })}</span>
      </div>
      <div className="row">
        <span className="title">quantity</span>
        <span className="field">{quantity}</span>
      </div>
      <div className="row">
        <span className="title">price</span>
        <span className="field">
          {quantity} x {price / quantity}$ = {price}$
        </span>
      </div>

    </div>
  );
}
/*x {moment(dateReturned).diff(moment(dateOut), "days")}days*/

export default RentalShort;
