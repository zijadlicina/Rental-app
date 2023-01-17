import React, { useEffect, useState } from "react";
import HourPicker from "./HourPicker/HourPicker";
import DatePicker from "./DatePicker";
import "./BasicDetail.css";
import { AiOutlineInfoCircle, AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

let fields = {
  field1: false,
  field2: false,
  field3: false,
};

function View({ setRent, current, setCurrentStep, setStep, rent }) {
  const {available} = current;
  const [dateOut, setDateOut] = useState(
    new Date(Date.now()).toLocaleDateString("en-CA")
  );
  const [timeOut, setTimeOut] = useState("12:00");
  const [dateReturned, setDateReturned] = useState(
    new Date(Date.now()).toLocaleDateString("en-CA")
  );
  const [timeReturned, setTimeReturned] = useState("12:00");
  const navigate = useNavigate();
  const [fieldsInfo, setFieldsInfo] = useState(fields);
  const [fieldInfo1, setFieldInfo1] = useState(false);
  const [fieldInfo2, setFieldInfo2] = useState(false);
  const [fieldInfo3, setFieldInfo3] = useState(false);
  const [fieldInfo4, setFieldInfo4] = useState(false);

  const changeFieldsInfo = (id) => {
    if (id === 0) setFieldInfo1(!fieldInfo1);
    if (id === 1) setFieldInfo2(!fieldInfo2);
    if (id === 2) setFieldInfo3(!fieldInfo3);
    if (id === 3) setFieldInfo4(!fieldInfo4);
  };
  const tabHandler = () => {
    setStep((prev) => {
      return prev + 1;
    });
    setCurrentStep((prev) => {
      return prev + 1;
    });
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
//    setOpenAlert(false);
   setRent({ ...rent, [name]: value });
  };

  useEffect(() => {
    setRent((prev) => {
      return {...prev, dateOut}
    })
  }, [dateOut]);

    useEffect(() => {
      setRent((prev) => {
        return { ...prev, dateReturned };
      });
    }, [dateReturned]);

    useEffect(() => {
      setRent((prev) => {
        return { ...prev, timeOut };
      });
    }, [timeOut]);

    useEffect(() => {
      setRent((prev) => {
        return { ...prev, timeReturned };
      });
    }, [timeReturned]);

    const [invalidQuantity, setInvalidQuantity] = useState(false);
    const squareHandler = (type) => {
      setInvalidQuantity(false)
      if (type === "plus") {
          if (rent.quantity === available) setInvalidQuantity(true)
          else setRent((prev) => { 
          return {...prev, quantity: prev.quantity + 1}
        })
     } else {
      if (rent.quantity === 1) setInvalidQuantity(true)
      else setRent((prev) => {
        return {...prev, quantity: prev.quantity - 1}
        })
      }
    }
    /* <div className="input-div check">
        <input type="checkbox" className="checkinput" />
        <label>The driver age's between 30 and 65?</label>
      </div>
      */
  return (
    <>
      <div className="input-div">
        <div className="label" style={{ position: "relative" }}>
          <label htmlFor="">Pick up location</label>
          <div className={fieldInfo1 ? "textmsgShow" : "textmsg"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, nostrum!
          </div>
          <span>
            <AiOutlineInfoCircle
              onMouseEnter={() => changeFieldsInfo(0)}
              onMouseLeave={() => changeFieldsInfo(0)}
            />
          </span>
          <span>optional</span>
        </div>
        <input type="text" placeholder="City, airport, region, district..." />
      </div>
      <div className="input-div"></div>
      <div className="input-div dateInput">
        <div className="datePickup">
          <div className="label" style={{ position: "relative" }}>
            <label>Date of pickup</label>
            <div className={fieldInfo2 ? "textmsgShow" : "textmsg"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, nostrum!
            </div>
            <span>
              <AiOutlineInfoCircle
                onMouseEnter={() => changeFieldsInfo(1)}
                onMouseLeave={() => changeFieldsInfo(1)}
              />
            </span>
          </div>
          <DatePicker date={dateOut} setDate={setDateOut} id={"dateOut"} />
          <HourPicker 
           time={timeOut}
           setTime={setTimeOut}
           id={"timeOut"}/>
        </div>
        <div className="dateDelivery">
          <div className="label" style={{ position: "relative" }}>
            <label>Date of delivery</label>
            <div className={fieldInfo3 ? "textmsgShow" : "textmsg"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, nostrum!
            </div>
            <span>
              <AiOutlineInfoCircle
                onMouseEnter={() => changeFieldsInfo(2)}
                onMouseLeave={() => changeFieldsInfo(2)}
              />
            </span>
          </div>
          <DatePicker
            date={dateReturned}
            setDate={setDateReturned}
            id={"dateReturned"}
          />
          <HourPicker 
           time={timeReturned}
           setTime={setTimeReturned}
           id={"timeReturned"}/>
        </div>
      </div>
     
      <div className="input-div">
        <div className="label" style={{ position: "relative" }}>
          <label htmlFor="">Quantity (max:{available})</label>
          <div className={invalidQuantity ? "textmsgShow" : "textmsg"}>
              Your quantity must be between 1 and {available}
            </div>
            <span>
              <AiOutlineInfoCircle
              />
            </span>
        </div>
              <div className="quantity">
              <AiOutlineMinusSquare className="icon" onClick={() => squareHandler("minus")}/>
                <input
                  className="input-quantity"
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={rent.quantity}
                  onChange={changeHandler}
                />
                <AiOutlinePlusSquare className="icon" onClick={() => squareHandler("plus")}/>
              </div>
              </div>
      <div className="nextbtn">
        <button type="button" className="next" onClick={() => tabHandler()}>
          Continue
        </button>
      </div>
    </>
  );
}

export default View;
