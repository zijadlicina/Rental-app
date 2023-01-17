import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {MdOutlineSpaceDashboard} from "react-icons/md"
import {Bar, Line, Pie} from "react-chartjs-2"
import Chart from 'chart.js/auto';
import "./Chart.css";

const Item = ({data}) => {
  return (
    <div className="item">
         <Bar className="bar-chart"  style={{height: "250px", width: "100%"}}
      type='bar'
      data={data}
      options={{
        maintainAspectRatio: false
      }}
      
      
    />
    </div>
  );
};

export default Item;
