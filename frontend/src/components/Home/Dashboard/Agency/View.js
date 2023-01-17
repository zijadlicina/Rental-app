import React, { useEffect, useState } from "react";
import "../Dashboard.css";
import { useNavigate } from "react-router-dom";
import {MdOutlineSpaceDashboard} from "react-icons/md"
import Chart from "../Chart";
import ProfitChart from "../ProfitChart";
import { CircularProgress } from "@mui/material";
import moment from "moment";

const Agency = ({user, provider, fetchProviders, fetchBikes, fetchRentals, bikes, providers, isLoading}) => {
    const {_id} = user;
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
        let query = "provider=" + provider._id
        query += "&category=all"
        fetchBikes(query)
        let query2 = `user=${user._id}&status=all`;
        fetchRentals(query2);
        fetchProviders()
        setLoading(false)
    }, [])

  return (
    <div className="dashboard-div">
      <div className="column1">
      {loading || isLoading ?
      <div className="loading-row"> 
        <CircularProgress />
      </div> : 
        <div className="row"> 
        <div className="column c25">
          <h3>Quantity by Category</h3>
          <Chart/> 
          <div className="row2"/>
        </div>
        <div className="column c75">
          <h3>Profit</h3>
          <ProfitChart />
          <div className="row2"/>
        </div>
      </div>
      }
      
    </div>
    <div className="column2">
      <h3>User Info</h3>
      <p className="bold">Username</p>
      <p>{user.username}</p>
      <p className="bold">Email</p>
      <p>{user.email}</p>
      <p className="bold">Joined</p>
      <p>{moment(user.createdAt).fromNow()}</p>
      <h3>Agency Info</h3>
      {providers.length === 0 ? null :
      <>
      <span className="bold">Name</span>
      <p>{getProviderById(providers, user).name}</p>
      <span className="bold">Email</span>
      <p>{getProviderById(providers, user).email}</p> 
      </> }
    </div>
  </div>
  );
};

const getProviderById = (providers, pr) => {
  console.log("prov", providers)
  console.log("pr", pr)
  return providers.find((x) => x.user === pr._id);
};


export default Agency;
