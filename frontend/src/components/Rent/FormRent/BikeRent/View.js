import React, { useEffect, useState } from "react";
import "./BikeRent.css";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function View({ date, hour, vehicle, bike, currentStep, current, step, setStep, setCurrentStep, setRent, rent}) {
  const { images, name, rating, weight, price } = current;
  const navigate = useNavigate()

  const tabHandler = () => {
    setStep((prev) => {
      return prev + 1;
    })
    if (currentStep > step ) {}
      else {
      setCurrentStep((prev) => {
        return prev + 1;
      });
    }
    continueHandler()
  }

  const continueHandler = () => {
    setRent((prev) => {
      return {...prev, bike: current}
    })
  }
  return (
    <>
      <div className="column">
        <div className="image-vehicle">
          <img src={images[0]} alt="image of vehicle" />
        </div>
        <div className="info-vehicle">
          <div className="headers">
            <p className="header">Name</p>
            <p className="header">Rating</p>
            <p className="header">Weight</p>
            <p className="header">Price</p>
          </div>
          <div className="dates">
            <p className="date">{name}</p>
            <p className="date">{rating}</p>
            <p className="date">{!weight ? 0 : weight} kg</p>
            <p className="date">{price} $</p>
          </div>
        </div>
      </div>
      <div className="nextbtn">
        <button
          type="button"
          className="cencel"
          onClick={() => navigate("/rental")}
        >
          <BsFillArrowLeftCircleFill /> Cencel
        </button>
        <button type="button" className="next" onClick={() => tabHandler()}>
          Continue
        </button>
      </div>
    </>
  );
}

export default View;
