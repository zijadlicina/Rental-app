import React, { useEffect, useState } from "react";
import "./FormRent.css";
import BikeRent from "./BikeRent";
import BasicDetail from "./BasicDetail";
import UserRent from "./UserRent";
import PricingRent from "./PricingRent";
import { useScrollTo } from "react-use-window-scroll";

import { LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

function View({
  step,
  hour,
  date,
  vehicle,
  user,
  bike,
  fetchOneBike,
  current,
  currentStep,
  setStep,
  setCurrentStep,
  addRental,
  quantityInput
}) {
  const scrollTo = useScrollTo()
  const navigate = useNavigate()

  const [isFetched, setIsFetched] = useState(false)
  useEffect(() => {
    fetchOneBike(bike, setIsFetched)
  }, []);

  const [rent, setRent] = useState({
    status: false,
    bike: null,
    user: null,
    dateOut: null,
    dateReturned: null,
    reqSent: null,
    quantity: quantityInput ? parseInt(quantityInput) : 1
  });

  const rentVehicleHandler = (e) => {
    e.preventDefault();
    let to = user._id;
    addRental(navigate, to, rent)
    scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    scrollTo({ top: 0, left: 0 })
  }, [])
  return (
    <div className="formrent">
      {!current || !isFetched ? (
        <LinearProgress />
      ) : current._id === bike ? (
        <form onSubmit={rentVehicleHandler}>
          {step === 0 ? (
            <BikeRent
              vehicle={vehicle}
              setStep={setStep}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
              step={step}
              rent={rent}
              setRent={setRent}
            />
          ) : step === 1 ? (
            <UserRent
              setStep={setStep}
              currentStep={currentStep}
              step={step}
              setCurrentStep={setCurrentStep}
              setRent={setRent}
            />
          ) : step === 2 ? (
            <BasicDetail
              hour={hour}
              date={date}
              setStep={setStep}
              setCurrentStep={setCurrentStep}
              rent={rent}
              bike={vehicle}
              setRent={setRent}
            />
          ) : step === 3 ? (
            <PricingRent rent={rent} setRent={setRent} />
          ) : null}
        </form>
      ) : null}
    </div>
  );
}

export default View;
