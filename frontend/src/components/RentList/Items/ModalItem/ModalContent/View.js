import React, { useEffect, useState } from "react";
import RentalShort from "./RentalShort";
import VehicleShort from "./VehicleShort";

function ModalContent({ bikes, rental, authorization }) {
  const {isUser, isAgency} = authorization
  const [bike, setBike] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (isAgency || rental.rejected) setBike(getBikeById(bikes, rental.bike._id._id));
    else setBike(getBikeById(bikes, rental.bike._id));
  }, []);

  return (
    <div className="col-2">
      {activeTab === 0 && bike ? 
      <VehicleShort bike={bike} /> 
      : activeTab === 1 && rental ?
      <div className="col-b"> 
       <RentalShort rental={rental} />
      </div> : null}
      <div className="circles">
        <div onClick={() => setActiveTab(0)} className={activeTab === 0 ? "active circle" : "circle"}></div>
        <div onClick={() => setActiveTab(1)} className={activeTab === 1 ? "active circle" : "circle"}></div>
      </div>
    </div>
  );
}

const getBikeById = (bikes, id) => {
  return bikes.find((x) => x._id === id);
};

export default ModalContent;
