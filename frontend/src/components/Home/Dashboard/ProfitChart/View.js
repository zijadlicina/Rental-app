import React, { useEffect, useState } from "react";
import "./Chart.css";
import { useNavigate } from "react-router-dom";
import {MdOutlineSpaceDashboard} from "react-icons/md"
import Item from "./Item"

const Chart = ({ rentals}) => {
  const [data, setData] = useState( {
    labels: ['1-5', '5-10', "10-15", "15-20", "20-25", "25-30"],
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
      label: "total price",
      data: [0, 0, 0, 0, 0],
      backgroundColor: [
        '#5AD6B0'
    ],
    }]
    rentals.map((it) => {
      if (it.status) { 
        let days = new Date(it.dateOut).getUTCDate()
        if (days > 0 && days < 6 ) datasets[0].data[0] += it.price;
        else if (days > 5 && days < 11 ) datasets[0].data[1] += it.price;
        else if (days > 10 && days < 16 ) datasets[0].data[2] += it.price;
        else if (days > 15 && days < 21 ) datasets[0].data[3] += it.price;
        else if (days > 20 && days < 26 ) datasets[0].data[4] += it.price;
        else if (days > 25 && days < 31 ) datasets[0].data[5] += it.price;
      }
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
