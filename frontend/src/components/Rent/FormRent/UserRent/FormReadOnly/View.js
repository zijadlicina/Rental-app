import React from "react";
import "./FormReadOnly.css";

function View({ user, setStep, step, setCurrentStep, currentStep, setRent }) {
  const { _id,username, image, name, surname, contact, email, location } = user;

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
        <div className="imgdiv">
          <img src={image} />
        </div>
        <div className="info-user">
          <div className="headers">
            <p className="header">ID</p>
            <p className="header">Username</p>
            <p className="header">Email</p>
            <p className="header">Location</p>
          </div>
          <div className="dates">
            <p className="date">{_id}</p>
            <p className="date">{username}</p>
            <p className="date">{email}</p>
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
