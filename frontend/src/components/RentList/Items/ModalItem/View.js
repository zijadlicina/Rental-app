import React, { useEffect, useState } from "react";
import "./ModalItem.css";

import { AiOutlineClose } from "react-icons/ai";
import Timeline from "./Timeline";
import ModalContent from "./ModalContent";
import StatusRental from "./StatusRental";
import { GiDutchBike } from "react-icons/gi";
import { VscCircleLargeOutline } from "react-icons/vsc";

function ModalItem({
  rentals,
  bikes,
  fetchUsers,
  isLoading,
  setModal,
  currentRental,
}) {
  const [rental, setRental] = useState(null);

  useEffect(() => {
    setRental(getRentalById(rentals, currentRental));
  }, []);
  
  return (
    <div className="cont">
      <div className="header">
         {!rental ? (
        <p>Loading...</p>
      ) : (
        <div className="h2">
          <StatusRental rental={rental}/>
        </div>
      )}
        <div className="close">
            <AiOutlineClose className="closeicon" onClick={() => setModal(0)} />
        </div>
      </div>
      {!rental ? (
        <p>Loading...</p>
      ) : (
        <div className="box">
          <Timeline rental={rental}/>
          <ModalContent rental={rental} bikes={bikes}/>
        </div>
      )}
    </div>
  );
}

const getRentalById = (rentals, id) => {
  return rentals.find((x) => x._id === id);
};

export default ModalItem;
