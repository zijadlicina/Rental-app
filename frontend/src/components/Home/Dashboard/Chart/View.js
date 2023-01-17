import React, { useEffect, useState } from "react";
import "./Chart.css";
import { useNavigate } from "react-router-dom";
import {MdOutlineSpaceDashboard} from "react-icons/md"
import Item from "./Item"

const Chart = ({bikesProvider}) => {
  const [data, setData] = useState( {
    labels: ['Bike', 'E-Bike', 'Scooter', 'No Category'],
    datasets: [{
      label: "quantity",
      data: [],
      backgroundColor: [
        'Yellow',
        '#EE5D70',
        '#FFAB49',
        '#5AD6B0',
        '#4C8DEB'
    ],
    borderWidth: 1
  }]
})

  useEffect(() => {
    let datasets = [{
      label: "quantity",
      data: [0, 0, 0, 0],
      backgroundColor: [
        '#4C8DEB',
        '#EE5D70',
        '#FFAB49',
        '#5AD6B0',
        'Yellow'
    ],
    }]
    bikesProvider.map((it) => {
      if (it.category === "634d5819c4c631b97983a6b1") datasets[0].data[0] += 1;
      else if (it.category === "634d5821c4c631b97983a6b3") datasets[0].data[1] += 1;
      else if (it.category === "634d5825c4c631b97983a6b5") datasets[0].data[2] += 1;
      else if (it.category === "63626d3b455e6225b4e15bb2") datasets[0].data[3] += 1;
    })
    setData((prev) => {
      return {...prev, datasets}
    });
  }, [])
  
  return (
      <div className="items-chart">
        <div className="item-chart">
          <Item data={data}/>
        </div>
      </div>
  );
};

export default Chart;
