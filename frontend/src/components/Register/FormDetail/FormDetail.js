import { useEffect, useState } from "react";
import "./InsertImage.css";
import { CircularProgress } from "@mui/material";
import {FiUser} from "react-icons/fi"
import {BsHouse} from "react-icons/bs"

import InsertImage from "./InsertImage";

const FormDetail = ({changeHandler, user, setUser }) => {
    const [imageField, setImageField] = useState("")
    const [chooseRool, setChooseRool] = useState("user")

    useEffect(() => {
        setUser({...user, image: imageField})
      }, [imageField])

      useEffect(() => {
        if (chooseRool === "agency"){
          setUser({...user, roles: "1994"})
        } else {
          setUser({...user, roles: "2001"})
        }
      }, [chooseRool])
    
      const roleHandler = (val) => {
        setChooseRool(val)
      }
    
  return (
    <>
    <div className="row">
            <label className="label-50" for="firstname">
              Choose a roll
            </label>
          </div>
          <div className="row roles">
            <div className={chooseRool === "user" ? "role active" : "role"}
            onClick={() => roleHandler("user")}>
              <span className="icon"><FiUser /></span>
              <span className="text">Client</span>
            </div>
            <div className={chooseRool === "agency" ? "role active" : "role"}
             onClick={() => roleHandler("agency")}>
              <span className="icon"><BsHouse /></span>
              <span className="text">Agency</span>
            </div>
          </div>
          {chooseRool === "agency" ?
          <>
            <div className="row-50">
              <label className="label-50" for="providerName">
                Agency Name
              </label>
              <label className="label-50" for="providerEmail">
                Agency Email
              </label>
            </div>
           <div className="row-50">
           <input
             className="input-50"
             type="text"
             placeholder="Enter agency name"
             id="providerName"
             name="providerName"
             value={user.providerName}
             onChange={changeHandler}
           />
           <input
             className="input-50"
             type="text"
             placeholder="Enter agency email"
             id="providerEmail"
             name="providerEmail"
             value={user.providerEmail}
             onChange={changeHandler}
           />
           </div>
           </>
          : null}
          <InsertImage setImageField={setImageField}/>
          <div className="row">
            <input type="submit" value="SIGN UP" />
          </div>
          </>
  );
};

export default FormDetail;