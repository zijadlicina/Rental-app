import "./AddRental.css";

import InsertImages from "./InsertImages";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";
import { GrBike } from "react-icons/gr";

import { Alert, FormControlLabel, Radio, RadioGroup } from "@mui/material";

let modelsBike = ["Vespa", "Hundai", "BMX"];
let modelsScooter = ["Vespa", "Hundai", "BMX"];
let modelsE_Bike = ["Vespa", "Hundai", "BMX"];
let typesData = [
  { name: "Family", value: false },
  { name: "Kids", value: false },
  { name: "Race", value: false },
  { name: "Casual", value: false },
  { name: "Street", value: false },
  { name: "Hill", value: false },
];

const AddRental = ({ addItem, loading, error }) => {
  const [basicInfo, setBasicInfo] = useState(false);
  const [detail, setDetail] = useState(false);
  const [divImages, setDivImages] = useState(false);
  const [models, setModels] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  //
  const [types, setTypes] = useState(typesData);
  const [limitImages, setLimitImages] = useState();
  const [image, setImage] = useState([]);
  const [array, setArray] = useState([]); // for images
  const [alertMsg, setAlertMsg] = useState(error); // for images

  const [bike, setBike] = useState({
    name: "",
    provider: "62f2355520425362f968fa76", // static
    category: "bike",
    price: 0,
    types: [],
    model: "Vespa",
    weight: "0kg",
    seat: "standard",
    color: "black",
    images: [],
    quantity: 1
  });

  useEffect(() => {
    console.log(bike);
  }, [bike]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOpenAlert(false);
    if (name === "types") {
      let types2 = bike.types;
      if (types2.includes(value)) {
        types2 = types2.filter((e) => e !== value);
        setBike({ ...bike, types: [...types2] });
      } else setBike({ ...bike, types: [...types2, value] });
    } else setBike({ ...bike, [name]: value });
  };

  const addHandler = (e) => {
    e.preventDefault();
    console.log("<bike", bike);
    addItem(bike);
    console.log(error)
    if (error) {
    }
    // if (ako ima errora) postavi alert validacije ....
    else {
      setAlertMsg("You succesfully added new vehicle!")
      setOpenAlert(true);
      setBike({
        name: "",
        provider: "62f2355520425362f968fa76", // static
        category: "bike",
        price: 0,
        types: [],
        model: "Vespa",
        weight: "0kg",
        seat: "standard",
        color: "black",
        images: [],
        quantity: 1
      });
      setTypes(typesData);
      setArray([]);
    }
  };
  return (
    <div className="body-div">
      <div className="container-add_rental">
        <div className="text">
          <h1>Add New Item</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, ullam?
          </p>
        </div>
        <form onSubmit={addHandler}>
          <div className="drop">
            <div className="header">
              <span>Basic Info</span>
              {!basicInfo ? (
                <BiDownArrowCircle onClick={() => setBasicInfo(!basicInfo)} />
              ) : (
                <BiUpArrowCircle onClick={() => setBasicInfo(!basicInfo)} />
              )}
            </div>
            {basicInfo ? (
              <>
                <div
                  className={
                    basicInfo ? "content basicinfo" : "notcontent basicinfo"
                  }
                >
                  <div className="input-div">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={bike.name}
                      onChange={changeHandler}
                    />
                    <label htmlFor="name">Category</label>
                    <select
                      name="category"
                      id="category"
                      value={bike.category}
                      onChange={changeHandler}
                    >
                      <option
                        value="bike"
                        onClick={() => setModels(modelsBike)}
                      >
                        Bike
                      </option>
                      <option
                        value="scooter"
                        onClick={() => setModels(modelsScooter)}
                      >
                        Scooter
                      </option>
                      <option
                        value="e-bike"
                        onClick={() => setModels(modelsE_Bike)}
                      >
                        E-Bike
                      </option>
                      <option value="no_category" onClick={() => setModels([])}>
                        No Category
                      </option>
                    </select>
                  </div>
                  <div className="input-div">
                    <label htmlFor="unit">Unit</label>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <input
                          style={{ width: "15px" }}
                          type="radio"
                          value="hour"
                          checked={true}
                        ></input>
                        <input type="radio" value="day"></input>
                        <input type="radio" value="month"></input>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <label htmlFor="hour">Hour</label>
                        <label htmlFor="day">Day</label>
                        <label htmlFor="month">Month</label>
                      </div>
                    </div>
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={bike.price}
                      onChange={changeHandler}
                    />
                  </div>
                  <div
                    className="input-div"
                    style={{ flexDirection: "column" }}
                  >
                    <label htmlFor="type">Select Types of using vehicle</label>
                    <div className="type">
                      {types.map((type, id) => {
                        return (
                          <div
                            className={
                              type.value === true
                                ? "div_selected"
                                : "div_notselected"
                            }
                            onClick={() => {
                              setTypes((prev) => {
                                let value = prev.at(id).value;
                                let clickvalue = {
                                  name: prev.at(id).name,
                                  value: !prev.at(id).value,
                                };
                                let prev2 = [];
                                prev.map((ob, idx) => {
                                  if (idx === id) prev2.push(clickvalue);
                                  else prev2.push(ob);
                                });
                                let e = {
                                  target: {
                                    name: "types",
                                    value: clickvalue.name,
                                  },
                                };
                                changeHandler(e);
                                return prev2;
                              });
                            }}
                          >
                            {type.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          <div className="drop">
            <div className="header">
              <span>Detail Info</span>
              {!detail ? (
                <BiDownArrowCircle onClick={() => setDetail(!detail)} />
              ) : (
                <BiUpArrowCircle onClick={() => setDetail(!detail)} />
              )}
            </div>
            <div className={detail ? "content detail" : "notcontent detail"}>
              <div className="input-div">
                <label htmlFor="model">Model</label>
                {models.length === 0 ? (
                  <>
                    <input
                      type="text"
                      name="model"
                      id="model"
                      value={bike.model}
                      onChange={changeHandler}
                    />
                  </>
                ) : (
                  <>
                    <select name="model" id="model" onChange={changeHandler}>
                      {models.map((model) => {
                        return <option value={model}>{model}</option>;
                      })}
                    </select>
                  </>
                )}
                <div>
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={bike.quantity}
                  onChange={changeHandler}
                />
                
              </div>
                <label htmlFor="weight">Weight</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={bike.weight}
                  onChange={changeHandler}
                />
                kg
              </div>
              <div className="input-div">
                <label htmlFor="seat">Seat</label>
                <select
                  name="seat"
                  id="seat"
                  onChange={changeHandler}
                  value={bike.seat}
                >
                  <option value="standard">standard</option>
                  <option value="seat2">seat2</option>
                  <option value="seat3">seat3</option>
                </select>
                <label htmlFor="color">Color</label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>
          <InsertImages
            setImage={setImage}
            divImages={divImages}
            setDivImages={setDivImages}
            image={image}
            changeHandler={changeHandler}
            loading={loading}
            array={array}
            setArray={setArray}
          />
          <div className="btns">
            {openAlert ? (
              <Alert>
                {alertMsg}
              </Alert>
            ) : null}
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};;

export default AddRental;
