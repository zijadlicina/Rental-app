import React, { useEffect, useState } from "react";

import { Rating } from "@mui/material";

function VehicleShort({ bike }) {
  const { _id, images, name, price, rating, provider } = bike;
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
        <span className="field">{name}</span>
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
        <button>View More</button>
      </div>
    </div>
  );
}

export default VehicleShort;
