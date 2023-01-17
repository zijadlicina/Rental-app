import React, { useEffect, useState } from "react";
import "./PricingRent.css";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import { MdRadioButtonUnchecked } from "react-icons/md";

function View({ currentStep, current, step, setStep, setCurrentStep, rent, setRent}) {
  const [packet, setPacket] = useState(0)
  useEffect(() => {
    setRent((prev) => {
    let bikeId = prev.bike._id;
    let userId = prev.user._id;
    let temp = {
      dateOut: prev.dateOut,
      dateReturned: prev.dateReturned
    }
    return { ...prev, bikeId, userId };
  });

  }, []);
    
  
  const packetHandler = (val) => {
    setPacket(val);
  }
  return (
    <>
      <div className="pricing-column">
        <div className="row1 header">
          <h2>Try FREE for 1 week</h2>
          <p>We uncover the facts around the clock, all over the globe.</p>
        </div>
        <div className="row2 price">
          <div
            className={packet === 0 ? "offer active" : "offer"}
            onClick={() => packetHandler(0)}
          >
            <div>
              <p>monthly</p>
            </div>
            <div>
              <span>
                {packet === 0 ? (
                  <FaCheckCircle style={{ height: "43px" }} />
                ) : (
                  <MdRadioButtonUnchecked style={{ height: "43px" }} />
                )}
              </span>
              <h3>1 week for free</h3>
            </div>
            <div style={{}}>
              <small>Then $3 every month for the first year</small>
            </div>
          </div>
          <div
            className={packet === 1 ? "offer active" : "offer"}
            onClick={() => packetHandler(1)}
          >
            <div>
              <p className="best">Best value</p>
            </div>
            <div>
              <p>yearly</p>
            </div>
            <div>
              <span>
                {packet === 1 ? (
                  <FaCheckCircle style={{ height: "43px" }} />
                ) : (
                  <MdRadioButtonUnchecked style={{ height: "43px" }} />
                )}
              </span>
              <h3>1 week for free</h3>
            </div>
            <div style={{}}>
              <small>Then $3 every month for the first year</small>
            </div>
          </div>
        </div>
        <div className="row3 btns">
          <button type="submit" className="first">Continue</button>
          <button type="button" className="second">
            Continue with PayPal <BsPaypal className="icon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default View;
