import React from "react";
import { GiDutchBike } from "react-icons/gi";
import { VscCircleLargeOutline } from "react-icons/vsc";
import "./StatusRental.css"
import Timer from "./Timer";

function View({ rental }) {
  const { status, dateReturned } = rental;
  let statusExpire = status;

  if (new Date(dateReturned) < Date.now()) statusExpire = false;
  return (
    <div>
      {statusExpire ? (
        <div className="active">
          <div className="circle">
            <VscCircleLargeOutline />
          </div>
          <div className="iconbike">
            <GiDutchBike/>
          </div>
          <Timer />
        </div>
      ) : (
        <div className="inactive">
          <div className="circle">
            <VscCircleLargeOutline />
          </div>
          <span>Inactive</span>
        </div>
      )}
    </div>
  );
}

export default View;
