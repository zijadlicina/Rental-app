import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import {MdOutlineSpaceDashboard} from "react-icons/md"
import Activity from "./Activity";
import User from "./User";
import Agency from "./Agency";
import Graph from "./Graph";
import Chart from "./Chart";
import ProfitChart from "./ProfitChart";
import { CircularProgress } from "@mui/material";

const Dashboard = ({ authorization, user, fetchProvider, provider }) => {
  const {isAgency, isUser} = authorization;
  useEffect(() => {
    if (isAgency) fetchProvider(user._id)
  }, [])
  if (isAgency && !provider) return <div className="dashboard-body">
   
  </div>
  return (
    <div className="dasboard-body">
      <h2><MdOutlineSpaceDashboard className="icon-dash"/>Dashboard</h2>
      {isAgency ? <Agency /> : 
      isUser ? <User /> : null}
    </div>
  );
};

export default Dashboard;
