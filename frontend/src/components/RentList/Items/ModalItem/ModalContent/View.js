import React, { useEffect, useState } from "react";
import RentalShort from "./RentalShort";
import VehicleShort from "./VehicleShort";

function ModalContent({ bikes, rental }) {
  const [bike, setBike] = useState(null);

  useEffect(() => {
    setBike(getBikeById(bikes, rental.bike._id));
  }, []);

  return (
    <div className="col-2">
      {!bike ? null : <VehicleShort bike={bike} />}
      <div className="col-b">
      {!rental ? null : <RentalShort rental={rental} />}
      </div>
    </div>
  );
}

const getBikeById = (bikes, id) => {
  return bikes.find((x) => x._id === id);
};

export default ModalContent;
