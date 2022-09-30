import React, { useEffect, useState } from "react";
import "./ItemShort.css";
import { GiDutchBike } from "react-icons/gi";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { MdOutlineReadMore, MdFeedback } from "react-icons/md";
import moment from "moment";

function View({ rentItem, bikes, setModal }) {
  const { dateOut, dateReturned, quantity, status, price } = rentItem;
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setBike(getBikeById(bikes, rentItem.bike._id));
    setLoading(false);
  }, []);


  var dif1 = new Date(dateReturned).getTime() - new Date(dateOut).getTime();
  var days = Math.floor(dif1 / (1000 * 3600 * 24))
  
  var daysLeft = Math.floor(
    (new Date(dateReturned).getTime() - new Date(Date.now()).getTime()) /
      (1000 * 3600 * 24)
  );


  let statusExpire = status;  
  if (new Date(dateReturned) < Date.now()) statusExpire = false;
  return (
    <div className="shortitem">
      <div className="icons">
        <div className="row">
          {!statusExpire ? (
            <span>Inactive</span>
          ) : (
            <span>{daysLeft} of {days} days left</span>
          )}
        </div>
        <span>
          {statusExpire ? <GiDutchBike className="bike" /> : null}
          <VscCircleLargeOutline
            className={statusExpire ? "circle active" : "circle notactive"}
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
              />
              <div className="btns">
                <button onClick={() => setModal(true)}>
                  <MdOutlineReadMore className="ic" />
                  <span>Read More</span>
                </button>
                {!statusExpire ? (
                  <button className="feedback">
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
const getBikeById = (bikes, id) => {
  return bikes.find((x) => x._id === id);
};

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
  price
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
            {new Date(dateOut).getDay() +
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
            {new Date(dateReturned).getDay() +
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
      </div>
    </div>
  );
};
export default View;
