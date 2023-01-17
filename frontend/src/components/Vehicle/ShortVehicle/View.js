import React, { useEffect, useState } from "react";
import "./ShortVehicle.css";
import { Rating } from "@mui/material";
import {useNavigate} from "react-router-dom"

import Tabs from "./Tabs";
import Price from "./Price";
import SliderImages from "./SliderImages";
import Quantity from "./Quantity";
import Description from "./Description";
import Reviews from "./Reviews";
import Attributes from "./Attributes";

let tabs = ["description", "reviews", "icons"];

function ShortVehicle({ current, alert, authorization, user, loading, providers, id, fetchProviders}) {
  const [tabCurrent, setTabCurrent] = useState(alert.type === "ADD_FEEDBACK" ? 1 : 0)
  const {isGuest, isUser} = authorization
  const [quantityInput, setQuantityInput] = useState(1)
  const [bike, setBike] = useState(current)
  const navigate = useNavigate()

  useEffect(() => {
    fetchProviders()
  }, [])

  const rentHandler = () => {
    if (current.available === 0) {
      //setErrorRent(true)
    } 
    else {
      if (!user) navigate(`/rental/rent/guest/${current._id}`, {state: {quantityInput: quantityInput}});
      else navigate(`/rental/rent/${user._id}/${current._id}/`, {state: {quantityInput: quantityInput}});
    }
  }
  if (!current || id !== current._id) return (
    <p>Loading...</p>
  )
  return (
    <div>
      <div className="side info">
        <h2>{current.name}</h2>
        <div className="rating">
          <Rating
            value={current.rating}
            precision={0.5}
            readOnly
            style={{
              background: "#334092",
              borderRadius: "15px",
              padding: "0 2%",
            }}
          />
          <span className="reviews">{current.used} used - {current.feedbacks} reviews</span>
        </div>
        <Tabs tabs={tabs} setTabCurrent={setTabCurrent} tabCurrent={tabCurrent}/>
        {tabCurrent === 0 ? (
          <Description />
        ) : tabCurrent === 1 ? (
          <Reviews bike={current}/>
        ) : (
          <Description />
        )}

        <Price price={current.price} />
        {isUser || isGuest ? 
        <div className="price-submit">
          <Quantity setQuantityInput={setQuantityInput} quantityInput={quantityInput}/>
          <button onClick={() => rentHandler()}> Rent Now</button>
        </div>
        : null}
        {!providers ? null :  
        <div className="provider">
          <span>Provider: </span>
          <span className="answer">{getProviderById(providers, current.provider).name}</span>
        </div>
        }
        {tabCurrent === 0 ? 
        <div className="attributes">
          <Attributes types={current.types}/>
        </div>
        : null}
      </div>
      <div className="side div-image">
        <SliderImages images={current.images} />
      </div>
    </div>
  );
}

const getBikeById = (bikes, id) => {
  return bikes.find((x) => x._id === id);
};
const getProviderById = (providers, pr) => {
  return providers.find((x) => x._id === pr._id);
};

export default ShortVehicle;
