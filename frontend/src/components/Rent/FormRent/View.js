import React, { useEffect, useState } from "react";
import "./FormRent.css";
import BikeRent from "./BikeRent";
import BasicDetail from "./BasicDetail";
import UserRent from "./UserRent";
import PricingRent from "./PricingRent";

import { LinearProgress } from "@mui/material";

function View({
  step,
  hour,
  date,
  vehicle,
  bike,
  fetchOneBike,
  current,
  currentStep,
  setStep,
  setCurrentStep,
  addRental
}) {
  useEffect(() => {
    const fetchBike = async () => {
      await fetchOneBike(bike);
    };
    fetchBike();
  }, []);

  const [rent, setRent] = useState({
    bike: null,
    user: null,
    dateOut: null,
    dateReturned: null,
    quantity: 1
  });

  const rentVehicleHandler = (e) => {
    e.preventDefault();
    console.log(rent)
    addRental(rent)
  }

  return (
    <div className="formrent">
      {!current ? (
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
