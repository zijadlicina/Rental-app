import React from "react";
import { GiDutchBike } from "react-icons/gi";
import { VscCircleLargeOutline } from "react-icons/vsc";
import "./StatusRental.css"
import Timer from "./Timer";

function View({ rental }) {
  const { status, dateReturned, rejected, completed } = rental;
  let statusExpire = status;

  return (
    <div>
      {statusExpire && !completed ? (
        <div className="active">
          <div className="circle">
            <VscCircleLargeOutline />
          </div>
          <div className="iconbike">
            <GiDutchBike/>
          </div>
          <Timer />
        </div>
      ): rejected ? 
        <div className="rejected">
          <div className="circle">
            <VscCircleLargeOutline />
          </div>
          <div className="iconbike">
            <GiDutchBike/>
          </div>
          <span>Rejected</span>
        </div> 
      : completed ? 
      <div className="completed">
        <div className="circle">
          <VscCircleLargeOutline />
        </div>
        <div className="iconbike">
          <GiDutchBike/>
        </div>
        <span>Completed</span>
      </div> 
     : (
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
