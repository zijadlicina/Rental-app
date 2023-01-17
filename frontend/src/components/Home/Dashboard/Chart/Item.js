import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {MdOutlineSpaceDashboard} from "react-icons/md"
import {Bar, Line, Pie} from "react-chartjs-2"
import Chart from 'chart.js/auto';
import "./Chart.css";

const Item = ({data}) => {
  return (
    <div className="item">
         <Pie className="pie-chart" style={{height: "250px"}}
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
