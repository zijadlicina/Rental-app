import React, { useEffect, useState } from "react";

import { Rating } from "@mui/material";
import {useNavigate,
} from "react-router-dom";
function VehicleShort({ bike, providers }) {
  const { _id, images, name, price, rating, provider } = bike;
  const navigate = useNavigate()
  const vehicleHandler = () => {
    navigate("/vehicle/" + _id)
  }

  return (
    <div className="col-a">
      <div className="row">
        <span className="head">About Vehicle</span>
      </div>
      <div className="row">
        <span className="title">id</span>
        <span className="field">{_id}</span>
      </div>
      <div className="row">
        <span className="title">Provider</span>
        <span className="field" style={{fontWeight: "bold"}}>{getProviderById(providers, provider).name}</span>
      </div>
      <div className="row">
        <span className="title">name</span>
        <span className="field">{name}</span>
      </div>
      <div className="row">
        <span className="title">Image</span>
        <span className="field">
          <img src={images[0]} alt="bike_image" />
        </span>
      </div>
      <div className="row">
        <span className="title">price</span>
        <span className="field">{price}$</span>
      </div>
      <div className="row">
        <span className="title">rating</span>
        <span className="field">
          <Rating value={rating} precision={0.5} readOnly />
        </span>
      </div>
      <div className="row">
        <button onClick={vehicleHandler}>View More</button>
      </div>
    </div>
  );
}

const getProviderById = (providers, pr) => {
  return providers.find((x) => x._id === pr._id);
};
export default VehicleShort;
