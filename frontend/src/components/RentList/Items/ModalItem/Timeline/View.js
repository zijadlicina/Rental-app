import React from "react";
import TimeItem from "./TimeItem";
import "./Timeline.css"

function Timeline({rental}) {
  let timeArray = [
    {text: "The client request has been sent", date: rental.reqSent},
    {text: "The agency approved the request" , date: rental.reqApproved},
    {text: "The agency has completed the rental process",  date: rental.reqCompleted},
    {text: "The client gave the feedback to vehicle",  date: rental.feedbackSent},
  ]
  let timeArrayRejected = [
    {text: "The client request has been sent", date: rental.reqSent},
    {text: "The agency rejected the request" , date: rental.reqRejected},
  ]
  return (
    <div className="timeline">
      {!rental.rejected ? 
      timeArray.map((item) => {
        return <TimeItem item={item}/>
      }) : 
      timeArrayRejected.map((item) => {
        return <TimeItem item={item}/>
      })}
    </div>
  );
}

export default Timeline;
