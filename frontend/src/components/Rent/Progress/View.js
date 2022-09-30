import React, { useState } from "react";
import "./Progress.css";

let boxes = new Array("0", "1", "2", "4");
function View({ step, currentStep }) {
  const [colorStep, setColorStep] = useState("box");
  return (
    <div className="progress">
      <p>Lorem ipsum dolor sit amet consectetur?</p>
      <div className="boxes">
        {boxes.map((val, idx) => {
          if (currentStep + 1 > idx) return <div className="box middle"></div>;
          else return <div className="box dark"></div>;
        })}
      </div>
      {currentStep === 3 ? (
        <p className="textmsg">Finish!</p>
      ) : (
        <p className="textmsg">{3 - currentStep} remaining to complete</p>
      )}
    </div>
  );
}

export default View;
