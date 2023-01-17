
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Items from "./Items";
import AlertBox from "./AlertBox";
import "./RentList.css";
import {CircularProgress} from "@mui/material"
import {FaList} from "react-icons/fa"

const RentList = ({
  rentsRef,
  user,
  alert,
  rentals,
  fetchRentals,
  fetchBikes,
  isLoading,
  authorization,
  cleanAlert,
}) => {
  const { isAdmin, isUser, isAgency } = authorization;
  const navigate = useNavigate();

  // picked rental for modal UI
  const [currentRental, setCurrentRental] = useState(null)

  const location = useLocation()
  let params = location.search;
  let objectParams = new URLSearchParams(params)
  const [currentTab, setCurrentTab] = useState(params && objectParams.get("status") ? objectParams.get("status") : "all")

  const tabHandler = (val) => {
      setCurrentTab(val)
  }
 
  const [reload, setReload] = useState(0)
  useEffect(() => {
      let query = "";
      if (!user) query = `user=${objectParams.get("user")}&status=${currentTab}`;
      else query = `user=${user._id}&status=${currentTab}`;
      fetchRentals(query);  
      let query2 = "limit=25"
      fetchBikes(query2)
      navigate("?" + query);
  }, [currentTab, reload]);

  const [alertVisible, setAlertVisible] = useState(alert.message)
  
  const alertHandler = () => {
    setAlertVisible(false)
    cleanAlert()
  }

  // refs
  useEffect(() => {
    setTimeout(() => {
      if (objectParams.get("status")) setCurrentTab(objectParams.get("status"))
      if (rentsRef.current && location && location.state){
        window.scrollTo({
          top: rentsRef.current[location.state._id].offsetTop,
          behavior: "smooth"
        })
      }
    }, 500)
  }, [rentsRef, location.state])


  return (
    <div className="body-div" onClick={alertHandler}>
        <div className="rentlist">
          <h2 className="header"><FaList className="icon-dash"/>Rentals</h2>
          <div className="tabs">
            <div
              className={currentTab === "all" ? "active" : null}
              onClick={() => tabHandler("all")}
            >
              All
            </div>
            <div
              className={currentTab === "inactive" ? "active" : null}
              onClick={() => tabHandler("inactive")}
            >
              Requests
            </div>
            <div
              className={currentTab === "rejected" ? "active" : null}
              onClick={() => tabHandler("rejected")}
            >
              Rejected
            </div>
            <div
              className={currentTab === "active" ? "active" : null}
              onClick={() => tabHandler("active")}
            >
              Active
            </div>
            <div
              className={currentTab === "completed" ? "active" : null}
              onClick={() => tabHandler("completed")}
            >
              Completed
            </div>
          </div>
          {alert.message && alertVisible ? <AlertBox alert={alert}/> : null}
          {isLoading ? <div className="rent-empty"><CircularProgress /></div> : 
           <Items
           rentals={rentals}
           setCurrentRental={setCurrentRental}
           currentRental={currentRental}
           rentsRef={rentsRef}
           setReload={setReload}
         />
          }
        </div>
    </div>
  );
};

export default RentList;
