import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Items from "./Items";
import "./RentList.css";

const RentList = ({
  user,
  rentals,
  fetchRentals,
  isLoading,
  authorization,
}) => {
  const { isAdmin, isUser, isAgency } = authorization;
  const navigate = useNavigate();

  // picked rental for modal UI
  const [currentRental, setCurrentRental] = useState(null)
  const [currentTab, setCurrentTab] = useState(0)

  const tabHandler = (val) => {
    setCurrentTab(val)
  }

  useEffect(() => {
    let query = `user=${user._id}`;
    fetchRentals(query);
    navigate("?" + query);
  }, []);
  return (
    <div className="body-div">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="rentlist">
          <h2 className="head">List of rentals</h2>
          <div className="tabs">
            <div
              className={currentTab === 0 ? "active" : null}
              onClick={() => tabHandler(0)}
            >
              All
            </div>
            <div
              className={currentTab === 1 ? "active" : null}
              onClick={() => tabHandler(1)}
            >
              Active
            </div>
            <div
              className={currentTab === 2 ? "active" : null}
              onClick={() => tabHandler(2)}
            >
              Inactive
            </div>
          </div>
          <Items
            rentals={rentals}
            setCurrentRental={setCurrentRental}
            currentRental={currentRental}
          />
        </div>
      )}
    </div>
  );
};

export default RentList;
