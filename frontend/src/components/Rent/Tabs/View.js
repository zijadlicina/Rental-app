import React from "react";
import "./Tabs.css";

let boxes = new Array("0", "1", "2", "4", "5");

function View({ currentStep, step, setStep }) {
  const changeStep = (idx) => {
    if (idx > currentStep) {
    } else setStep(idx);
  };
  return (
    <div className="tabs">
      <div
        className={step === 0 ? "active" : currentStep === 0 ? "" : null}
        onClick={() => changeStep(0)}
      >
        1. Item
      </div>
      <div
        className={step === 1 ? "active" : currentStep >= 1 ? "" : "locked"}
        onClick={() => changeStep(1)}
      >
        2. User
      </div>
      <div
        className={step === 2 ? "active" : currentStep >= 2 ? "" : "locked"}
        onClick={() => changeStep(2)}
      >
        3. Details of rent
      </div>
      <div
        className={step === 3 ? "active" : currentStep === 3 ? "" : "locked"}
        onClick={() => changeStep(3)}
      >
        4. Pricing
      </div>
    </div>
  );
}

export default View;
