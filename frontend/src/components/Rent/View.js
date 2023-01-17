import "./Rent.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {useLocation} from "react-router-dom"

import Progress from "./Progress"
import Tabs from "./Tabs";
import FormRent from "./FormRent";

const Rent = () => {
  const location = useLocation();
  const { user, bike } = useParams();
  //
  const [step, setStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0);
  const [vehicle, setVehicle] = useState("")
  /* <Progress step={step} currentStep={currentStep} /> */
  return (
    <div className="body-rent">
      <div className="container-rent">
        <div className="intro">
          <h5>Rent a vehicle</h5>
        </div>
        <Tabs step={step} setStep={setStep} currentStep={currentStep} />
        <FormRent
          step={step}
          currentStep={currentStep}
          vehicle={vehicle}
          bike={bike}
          user={user}
          setStep={setStep}
          quantityInput={location.state ? location.state.quantityInput : 1}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </div>
  );
};

export default Rent;
