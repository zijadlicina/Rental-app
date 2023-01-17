import React, { useEffect, useRef, useState } from "react";
import "./Vehicle.css";
import { useParams, useLocation } from "react-router-dom";
import { useScrollTo } from "react-use-window-scroll";
import { CircularProgress } from "@mui/material";
import ShortVehicle from "./ShortVehicle";
import AlertBox from "./AlertBox";

function View({ bikes, alert, fetchOneBike, loading, cleanAlert, fetchProviders}) {
  const { id } = useParams();  
  const [bikesArray, setBikesArray] = useState(null);

  useEffect(() => {
    let query = {
      id
    };
    fetchOneBike(query)
  }, [])

  useEffect(() => {
    fetchProviders()
  })

  const scrollTo = useScrollTo()
  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  // alert disable
  useEffect(() => {
    setTimeout(() => {
      setAlertOpen(false)
    }, 3000)
  }, [])

  const last = useRef(false)
  useEffect(() => {
    return () => {
      if (last.current){
        cleanAlert()
      }
      last.current = true;
    }
  }, [])

  const [alertOpen, setAlertOpen] = useState(alert.message ? true : false);
  if (loading) {
    return (
    <div className="body-div-vehicle">
      <div className="vehicle-div">
        <CircularProgress />
      </div>
    </div>
    )
  }
  // onClick={() => setAlertOpen(false)}>
  return (
    <div className="body-div-vehicle"> 
      <div className="vehicle-div">
        {alertOpen ? (
           <AlertBox alert={alert}/>
        ) : null}
        {!loading ? <ShortVehicle id={id}/> : null}
      </div>
    </div>
  );
}



export default View;
