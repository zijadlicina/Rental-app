import React from "react";
import "./FormReadOnly.css";

function View({ user, setStep, step, setCurrentStep, currentStep, setRent }) {
  const { username, name, surname, contact, location } = user;

  const tabHandler = () => {
    setStep((prev) => {
      return prev + 1;
    });
    if (currentStep > step) {
    } else {
      setCurrentStep((prev) => {
        return prev + 1;
      });
    }
    continueHandler();
  };

  const continueHandler = () => {
    setRent((prev) => {
      return { ...prev, user};
    });
  };
  return (
    <>
      <div className="column">
        <div className="imgdiv"></div>
        <div className="info-vehicle">
          <div className="headers">
            <p className="header">Name</p>
            <p className="header">Surname</p>
            <p className="header">Contact</p>
            <p className="header">Location</p>
          </div>
          <div className="dates">
            <p className="date">{name}</p>
            <p className="date">{surname}</p>
            <p className="date">{contact}</p>
            <p className="date">{location}</p>
          </div>
        </div>
      </div>
      <div className="nextbtn">
        <button type="button" className="next" onClick={() => tabHandler()}>
          Continue
        </button>
      </div>
    </>
  );
}

export default View;
