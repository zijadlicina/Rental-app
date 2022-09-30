import React, { useEffect, useState } from "react";
import "./UserRent.css";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import FormGuest from "./FormGuest";
import FormReadOnly from "./FormReadOnly"
function View({ authorization, setStep, setCurrentStep, step, currentStep, setRent}) {
  const {isAdmin, isGuest, isUser} = authorization
  useEffect(() => {
  }, [])
  return (
    <>
      {isGuest ? (
        <FormGuest
          step={step}
          currentStep={currentStep}
          setStep={setStep}
          setCurrentStep={setCurrentStep}
          setRent={setRent}
        />
      ) : (
        <FormReadOnly
          step={step}
          currentStep={currentStep}
          setStep={setStep}
          setCurrentStep={setCurrentStep}
          setRent={setRent}
        />
      )}
    </>
  );
}

export default View;
