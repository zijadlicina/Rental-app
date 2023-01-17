import { useEffect, useState } from "react";
import "./InsertImage.css";
import { CircularProgress } from "@mui/material";

const InsertImage = ({setImageField }) => {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [imageDiv, setImageDiv] = useState(null)

  useEffect(() => {
    uploadImage()
  }, [image])

const uploadImage = (e) => {
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
        setImageDiv(data.url)
        setImageField(data.url)
        setLoading(false);
        //
        /// changeHandler(e) ovdje ne bi array bio async
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="input-div">
    <label htmlFor="images">Insert profile image</label>
    <div className="profile-row">
      <div className="input-upload">
            <input
              type="file"
              id="images"
              name="images"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>
      <div className="image">
          {loading ? <CircularProgress /> : imageDiv  !== null ?
          <img src={imageDiv}></img> : null}
      </div>
      </div>
  </div>
  );
};

export default InsertImage;

;