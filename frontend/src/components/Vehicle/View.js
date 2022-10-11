import React, { useEffect, useState } from "react";
import "./Vehicle.css";
import { useParams, useLocation } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import ShortVehicle from "./ShortVehicle";

function View({ bikes, alert }) {
  const { id } = useParams();
  const [bike, setBike] = useState(null);

  useEffect(() => {
    setBike(getBikeById(bikes, id));
  }, []);

  const [data, setData] = useState(null);
  useEffect(() => {
    console.log("alert objekat");
    setData(alert.data);
     return () => {
       console.log("izbrisi alert objekat");
       
     };
  }, []);


  const [alertOpen, setAlertOpen] = useState(true);
  return (
    <div className="body-div-vehicle" onClick={() => setAlertOpen(false)}>
      <div className="vehicle-div">
        {alertOpen && data ? (
          <div className="alert">
            <span>{data.message}</span>
          </div>
        ) : null}
        {!bike ? <CircularProgress /> : <ShortVehicle bike={bike} />}
      </div>
    </div>
  );
}

const getBikeById = (bikes, id) => {
  return bikes.find((x) => x._id === id);
};

export default View;
