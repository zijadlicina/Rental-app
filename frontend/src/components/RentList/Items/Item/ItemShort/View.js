import React, { useEffect, useState } from "react";
import "./ItemShort.css";
import { GiDutchBike } from "react-icons/gi";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { MdOutlineReadMore, MdFeedback } from "react-icons/md";
import moment from "moment";
import ShortAgency from "./ShortAgency";
import ShortUser from "./ShortUser";

function View({ id, rentsRef, setReload, providers, user, rentItem, bike, setModal, setCurrentRental, authorization }) {
  const {isAgency, isUser} = authorization;
  const [provider, setProvider] = useState(null)
  useEffect(() => {
    setProvider(getProviderById(providers, bike.provider))
  })
  if (isAgency) return (
    <ShortAgency id={id} rentsRef={rentsRef} user={user}  setReload={setReload} bike={bike} rentItem={rentItem} setModal={setModal} setCurrentRental={setCurrentRental}/>
  )
  return (
    <ShortUser id={id} rentsRef={rentsRef} user={user} setReload={setReload} bike={bike} rentItem={rentItem} setModal={setModal} setCurrentRental={setCurrentRental}/>
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

const getProviderById = (providers, pr) => {
  return providers.find((x) => x._id === pr._id);
};

export default View;
