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
  rentItem,
  users,
  bikes,
  setModal,
  modal,
  setCurrentRental,
}) => {
  const { bikeId, userId, dateOut, dateReturned, price, quantity, status } =
    rentItem;

  const [user, setUser] = useState(null);
  const [bike, setBike] = useState(null);

  var daysLeft =
    (new Date(dateReturned).getTime() - new Date(dateOut).getTime()) /
    (1000 * 3600 * 24);

  let statusExpire = status;
  if (new Date(dateReturned) < Date.now()) statusExpire = false;

  useEffect(() => {
    setUser(getUserById(users, rentItem.user._id));
    setBike(getBikeById(bikes, rentItem.bike._id));
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
  return (
    <div className={modal ? "rent-item item-modal" : "rent-item"}>
      <ItemShort
        rentItem={rentItem}
        bikes={bikes}
        setModal={setModal}
        setCurrentRental={setCurrentRental}
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
