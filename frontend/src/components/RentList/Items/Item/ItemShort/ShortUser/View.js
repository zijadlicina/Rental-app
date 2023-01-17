import React, { useEffect, useState, useRef } from "react";
import "../ItemShort.css";
import { GiDutchBike } from "react-icons/gi";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { MdOutlineReadMore, MdFeedback } from "react-icons/md";
import { CircularProgress } from "@mui/material";
import moment from "moment"

function View({ id, rentsRef, providers, rentItem, bike, setModal, setCurrentRental, authorization }) {
  const {isAgency, isUser} = authorization;
  const { _id, dateOut, dateReturned, quantity, status, price, completed, rejected, feedback, reasonMessage } = rentItem;

  const inputRef = useRef([])

  var start = moment(dateReturned)
  var end = moment(dateOut)
  var startNow = moment(Date.now())

  var days = start.diff(end, "days") + 1;
  var daysLeft = startNow.diff(end, "days")

  let statusExpire = status;
  if (new Date(dateReturned) < Date.now()) statusExpire = false;

  const [provider, setProvider] = useState(null)
  useEffect(() => {
    setProvider(getProviderById(providers, bike.provider))
  })

  return (
    <div ref={(el) => { rentsRef.current[_id] = el}} className="shortitem">
      <div className="icons">
        <div className="row">
          {rejected ? (
          <span>This request was aborted</span>  
          ) : !status ? (
            <span>Inactive - The request has been sent, please wait for a response...</span>
          ) : completed ?
          <span>
            The rental process is completed
          </span> : daysLeft === 0 ? (
            <span>
              The last day of rental
             </span>
          ) : daysLeft < 0 ? (
            <span>
              {daysLeft * - 1 + 1} left until rental begin
            </span>
          ) : (
            <span>
              Active
            </span>
          )}
        </div>
        <span>
          {statusExpire ? <GiDutchBike className="bike" /> : null}
          <VscCircleLargeOutline
          className={rejected ? "circle rejected" : status && !completed ? "circle active" : completed ? "circle completed" : "circle notactive"}
          />
        </span>
      </div>
      <div className="item">
        {!bike ? (
          <CircularProgress />
        ) : (
          <>
            <div className="image">
              <Image bike={bike} />
            </div>
            <div className="info">
              <Info
                bike={bike}
                dateOut={dateOut}
                dateReturned={dateReturned}
                quantity={quantity}
                reasonMessage={reasonMessage}
                price={price}
              />
              <div className="btns">
                <button
                  onClick={() => {
                    setCurrentRental(_id);
                    setModal(1);
                  }}
                >
                  <MdOutlineReadMore className="ic" />
                  <span>Read More</span>
                </button>
                {isAgency && !status ? 
                <button className="approve">
                  Approve
                </button> : null }
                {isUser && status && completed ? (
                  <button

                    onClick={() => {
                      if (feedback) {}
                      else {
                        setCurrentRental(_id);
                        setModal(2);
                      }
                    }}
                    className={!feedback ? "feedback" : "feedback resolved"}
                  >
                    <MdFeedback className="ic" />
                    {!feedback ? <span>
                      Feedback</span> : 
                    <span>Feedback Resolved</span> }
                  </button>
                ) : null}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
/*
const getBikeById = (id) => {
  return bikes.find((x) => x._id === id);
};
*/
const Image = ({ bike }) => {
  const { images } = bike;
  return <img src={images[0]} alt="image bike" />;
};
const Info = ({
  bike,
  dateOut,
  dateReturned,
  quantity,
  statusExpire,
  daysLeft,
  price,
  reasonMessage
}) => {
  const { name } = bike;
  let blank = " ";
  return (
    <div>
      <h2>{name}</h2>
      <div className="info-detail">
        <div className="row">
          <label>Date Picked</label>
          <span>
            {moment(new Date(dateOut)).format("DD") + 
              " " +
              moment(new Date(dateOut)).format("MMM") +
              " " +
              new Date(dateOut).getFullYear() +
              " - " +
              new Date(dateOut).toLocaleString("en-us", {
                weekday: "long",
              })}
          </span>
        </div>
        <div className="row">
          <label>Date Returned</label>
          <span>
            {moment(new Date(dateReturned)).format("DD") + 
              " " +
              moment(new Date(dateReturned)).format("MMM") +
              " " +
              new Date(dateReturned).getFullYear() +
              " - " +
              new Date(dateReturned).toLocaleString("en-us", {
                weekday: "long",
              })}
          </span>
        </div>
        <div className="row">
          <label>Price</label>
          <span>{price} $</span>
        </div>
        {reasonMessage ? 
          <div className="row">
            <label>Reason of agency abort: </label>
            <span className="reason">"{reasonMessage}"</span>
          </div> : null }
      </div>
    </div>
  );
};

const getProviderById = (providers, pr) => {
  return providers.find((x) => x._id === pr._id);
};

export default View;
