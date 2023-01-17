import React, { useEffect, useState } from "react";
import "../ItemShort.css";
import { GiDutchBike } from "react-icons/gi";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { MdOutlineReadMore, MdFeedback } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import moment from "moment"
import { CircularProgress } from "@mui/material";

function View({ id, rentsRef, providers, setReload, rentItem, user, provUser, bike, setModal, setCurrentRental, authorization, approveRental, rejectRental, completeRental }) {
  const {isAgency, isUser} = authorization;
  const { _id, dateOut, dateReturned, quantity, status, price, completed, rejected, reasonMessage } = rentItem;
  const {username, image} = user;
  const navigate = useNavigate()

  var start = moment(dateReturned)
  var end = moment(dateOut)
  var startNow = moment(Date.now())

  var days = start.diff(end, "days") + 1;
  var daysLeft = startNow.diff(end, "days")

  const [provider, setProvider] = useState(null)
  useEffect(() => {
    setProvider(getProviderById(providers, bike.provider))
  })

  const approveHandler = () => {
    setCurrentRental(_id);
    approveRental(_id, setReload)
  }

  const rejectHandler = () => {
    setCurrentRental(_id);
    setModal(3)
  }

  const completeHandler = () => {
    setReload(Math.random())
    completeRental(_id)
  }
  if (!provider) return (
    <div className="shortitem loading">
        <CircularProgress />
    </div> 
  )
  return (
    <div ref={(el) => { rentsRef.current[_id] = el}} className="shortitem">
    <div className="icons">
      <div className="row">
        {rejected ? (
          <span>This request was aborted</span>  
        ) : !status ? (
          <span>Inactive - Please respond to the request</span>
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
        {status ? <GiDutchBike className="bike" /> : null}
        <VscCircleLargeOutline
          className={rejected ? "circle rejected" : status && !completed ? "circle active" : completed ? "circle completed" : "circle notactive"}
        />
      </span>
    </div>
    <div className="item">
      {!bike ? (
        <p>Loading...</p>
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
              price={price}
              image={image}
              username={username}
              reasonMessage={reasonMessage}
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
              {isAgency && !status && !rejected ? 
              <>
              <button className="approve" onClick={approveHandler}>
                <BsCheck className="ic" />
                Approve
              </button> 
              <button className="reject" onClick={rejectHandler}>
                Reject
              </button> 
              </> : null }
              
              {isAgency && status && !completed && !rejected ? 
              <>
              <button className="end" onClick={completeHandler}>
                <BsCheck className="ic" />
                End process
              </button> 
              </> : null }
              {isUser && status && completed && !rejected ? (
                <button
                  onClick={() => {
                    setCurrentRental(_id);
                    setModal(2);
                  }}
                  className="feedback"
                >
                  <MdFeedback className="ic" />
                  <span>Feedback</span>
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
  image,
  username,
  reasonMessage
}) => {
  const { name } = bike;
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
        <div className="row client">
          <label>Client: </label>
          <span>
            {username}
            <img src={image} style={{width: "30px", height: "30px", marginLeft: "5px", marginBottom: "3px"}}/>
          </span>
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
