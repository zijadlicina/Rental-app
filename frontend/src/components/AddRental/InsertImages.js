import React, { useState, useEffect } from "react";
import "./InsertImages.css";
import { BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";
import { CircularProgress } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbCircle } from "react-icons/tb";

function InsertImages({
  divImages,
  setDivImages,
  setImage,
  image,
  setUrl,
  changeHandler,
  array,
  setArray,
}) {
  const [loading, setLoading] = useState(false);
  const [dragElement, setDragElement] = useState(null);
  const [replaceItems, setReplaceItems] = useState({ first: -1, second: -1 });

  useEffect(() => {
  }, replaceItems);

  const uploadImage = () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "zike123");
    data.append("cloud_name", "djespjbgy");
    fetch("https://api.cloudinary.com/v1_1/djespjbgy/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setArray((prev) => {
          let e = { target: { name: "images", value: [...prev, data.url] } }; ///// ????????
          changeHandler(e);
          return [...prev, data.url];
        });
        setLoading(false);
        //
        /// changeHandler(e) ovdje ne bi array bio async
      })
      .catch((err) => console.log(err));
  };
  const removeImage = (val) => {
    setLoading(true);
    let array2 = array.filter((ob) => ob !== val);
    setArray(array2);
    setLoading(false);
  };

  const changeMainItem = (idx) => {
    setLoading(true);
    let val = array[idx];
    let array2 = array.filter((ob) => ob !== val);
    array2.splice(0, 0, val);
    setArray(array2);
    setDragElement(null)
    setLoading(false);
  };

  const changeItems = (idx) => {
    setLoading(true);
    setArray((prev) => {
      let temp = prev;
      let val1 = array[replaceItems.first];
      let val2 = array[idx];
      temp[replaceItems.first] = val2;
      temp[idx] = val1;
      setReplaceItems({first: 0, second: 0})
      return temp;
    });
    setLoading(false);
  };

  return (
    <div className="drop" style={{ height: "auto" }}>
      <div className="header">
        <span>Images</span>
        {!divImages ? (
          <BiDownArrowCircle onClick={() => setDivImages(!divImages)} />
        ) : (
          <BiUpArrowCircle onClick={() => setDivImages(!divImages)} />
        )}
      </div>
      <div className={divImages ? "content detail" : "notcontent detail"}>
        <div className="input-div">
          <label htmlFor="images">Insert images</label>
        </div>
        <div className="input-file">
          <input
            type="file"
            id="images"
            name="images"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <div onClick={uploadImage}>upload</div>
        </div>
        <div className="images">
          {loading ? (
            <p style={{ marginTop: "5%" }}>
              <CircularProgress />
            </p>
          ) : (
            array.map((val, idx) => {
              return (
                <div style={{ position: "relative", padding: "1%" }}>
                  <div
                    draggable={true}
                    onDrag={(e) =>
                      setReplaceItems({ ...replaceItems, first: idx })
                    }
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (dragElement){
                        changeMainItem(idx)
                      }
                      else changeItems(idx);
                    }}
                  >
                    <img src={val} alt="image_1" />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      width: "15%",
                      height: "17px",
                      textAlign: "center",
                      borderRadius: "10px",
                      background: "white",
                      zIndex: "2",
                      top: "2%",
                      right: "3%",
                      color: "red",
                      fontSize: "x-larger",
                      cursor: "pointer",
                    }}
                  >
                    <AiOutlineCloseCircle
                      style={{ fontSize: "medium" }}
                      onClick={() => removeImage(val)}
                    />
                  </div>
                  {idx === 0 ? (
                    <div
                      style={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        width: "15%",
                        height: "17px",
                        textAlign: "center",
                        borderRadius: "10px",
                        background: "white",
                        zIndex: "2",
                        bottom: "2%",
                        right: "3%",
                        color: "black",
                        fontSize: "x-larger",
                        cursor: "pointer",
                        background: "lightgreen",
                      }}
                      draggable="true"
                      onDrag={(e) => setDragElement(e.target)}
                    >
                      <TbCircle style={{ fontSize: "medium" }} />
                    </div>
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default InsertImages;
