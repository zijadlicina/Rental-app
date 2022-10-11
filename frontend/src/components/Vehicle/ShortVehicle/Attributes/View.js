import React, { useState } from "react";
import "./Attributes.css";

function Attributes({ types }) {
  return (
    <div className="attributes">
      <h3>Blend Attributes</h3>
      <div className="types">
        {types.map((type) => {
          return (
            <div className="type">
              <span>{type}</span>
              <div className="efficent"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Attributes;
