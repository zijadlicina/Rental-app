import React, { useEffect, useState } from "react";
import User from "./User";
import Vehicle from "./Vehicle";
import moment from "moment";
import { CircularProgress } from "@mui/material";

import { MdOutlineCircle, MdDirectionsBike } from "react-icons/md";
import { AiOutlineDislike, AiOutlineComment } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import ItemShort from "./ItemShort"

const View = ({
  id,
  rentsRef,
  rentItem,
  users,
  bikes,
  setModal,
  modal,
  setCurrentRental,
  fetchBikes,
  authorization,
  setReload
}) => {
  const [user, setUser] = useState(null);
  const [bike, setBike] = useState(null);
  const {isUser, isAgency} = authorization;

  useEffect(() => {
    setUser(getUserById(users, rentItem.user._id));
    if (isAgency || rentItem.rejected) setBike(getBikeById(bikes, rentItem.bike._id._id));
    else setBike(getBikeById(bikes, rentItem.bike._id));
  }, []);
  /*
  <div>{!bike ? <CircularProgress /> : <Vehicle bike={bike} />}</div>
      <div className="info">
        <div className="row first">
          {!statusExpire ? (
            <span>Inactive</span>
          ) : (
            <span>{daysLeft} days left</span>
          )}
        </div>
        <div className="row">
          <label>Date Out</label>
          <span>{new Date(dateOut).toLocaleDateString("ko-KR")}</span>
        </div>
        <div className="row">
          <label>Date Out</label>
          <span>{new Date(dateReturned).toLocaleDateString("ko-KR")}</span>
        </div>
        <div className="row">
          <label>Quantity</label>
          <span>{quantity}</span>
        </div>
        <div className="row">
          <label>Price</label>
          <span>
            {quantity}x * {price / quantity}$ = {price}$
          </span>
        </div>
        <div className="row desc">
          <label>Description</label>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing, in?</span>
        </div>
        <div className="row features">
          <span className="like">
            <span>4</span>
            <span className="icon">
              <IoMdHeartEmpty />
            </span>
          </span>
          <span className="dislike">
            <span>2</span>
            <span className="icon">
              <AiOutlineDislike />
            </span>
          </span>
          <span className="comment">
            <span>2</span>
            <span className="icon">
              <AiOutlineComment />
            </span>
          </span>
        </div>
        <div className="row btns">
          <button>Read More</button>
          <button
            style={
              statusExpire
                ? { background: "grey", cursor: "not-allowed" }
                : null
            }
          >
            Comment
          </button>
        </div>
      </div>

      <div className="icon">
        <span>
          <MdDirectionsBike />
        </span>
        <span>
          <MdOutlineCircle
            className="circle"
            style={
              statusExpire
                ? { background: "lightgreen" }
                : { background: "pink" }
            }
          />
        </span>
      </div>
*/
  if (!bike || !user) return (
    <div className="rent-empty">
      <CircularProgress />
    </div>
  )
  else return (
    <div className={modal ? "rent-item item-modal" : "rent-item"}>
      <ItemShort
        id={id}
        rentsRef={rentsRef}
        bike={bike}
        user={user}
        rentItem={rentItem}
        setModal={setModal}
        setCurrentRental={setCurrentRental}
        setReload={setReload}
      />
    </div>
  );
};

const getUserById = (users, id) => {
  return users.find((x) => x._id === id);
};
const getBikeById = (bikes, id) => {
  return bikes.find((x) => x._id === id);
};

export default View;
