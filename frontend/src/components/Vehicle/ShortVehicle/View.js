import React, { useEffect, useState } from "react";
import "./ShortVehicle.css";
import { Rating } from "@mui/material";
import Tabs from "./Tabs";
import Price from "./Price";
import SliderImages from "./SliderImages";
import Quantity from "./Quantity";
import Description from "./Description";
import Reviews from "./Reviews";
import Attributes from "./Attributes";

let tabs = ["description", "reviews", "icons"];

function ShortVehicle({ bike, alert }) {
  const [tabCurrent, setTabCurrent] = useState(alert.type === "ADD_FEEDBACK" ? 1 : 0)

  const { name, quantity, available, price, images, rating, types } = bike;

  return (
    <div>
      <div className="side info">
        <h2>{name}</h2>
        <div className="rating">
          <Rating
            value={rating}
            precision={0.5}
            readOnly
            style={{
              background: "#334092",
              borderRadius: "15px",
              padding: "0 2%",
            }}
          />
          <span className="reviews">337 reviews</span>
        </div>
        <Tabs tabs={tabs} setTabCurrent={setTabCurrent} tabCurrent={tabCurrent}/>
        {tabCurrent === 0 ? (
          <Description />
        ) : tabCurrent === 1 ? (
          <Reviews bike={bike}/>
        ) : (
          <Description />
        )}
        <Price price={price} />
        <div className="price-submit">
          <Quantity />
          <button>Rent Now</button>
        </div>
        <div className="attributes">
          <Attributes types={types}/>
        </div>
      </div>
      <div className="side div-image">
        <SliderImages images={images} />
      </div>
    </div>
  );
}

export default ShortVehicle;
