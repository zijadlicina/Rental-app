import "./Rent.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

import Progress from "./Progress"
import Tabs from "./Tabs";
import FormRent from "./FormRent";

const Rent = () => {
  const { user, bike } = useParams();
  //
  const [step, setStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0);
  const [vehicle, setVehicle] = useState("")
  return (
    <div className="body-rent">
      <Progress step={step} currentStep={currentStep} />
      <div className="container-rent">
        <div className="intro">
          <h2>Rent a vehicle</h2>
        </div>
        <Tabs step={step} setStep={setStep} currentStep={currentStep} />
        <FormRent
          step={step}
          currentStep={currentStep}
          vehicle={vehicle}
          bike={bike}
          user={user}
          setStep={setStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </div>
  );
};

export default Rent;
