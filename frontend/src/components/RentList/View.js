import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
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
          <h2 className="head">Rent list page</h2>
          <div className="tabs">
            <div className="active">All</div>
            <div>Active</div>
            <div>Inactive</div>
          </div>
          <Items rentals={rentals} />
        </div>
      )}
    </div>
  );
};

export default RentList;
