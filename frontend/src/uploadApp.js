import React, { useState } from "react";

const App = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [url2, setUrl2] = useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "zike123");
    data.append("cloud_name", "djespjbgy");
    
  };
   const getImage = () => {
     const data = new FormData();
     data.append("file", image);
     data.append("upload_preset", "zike123");
     data.append("cloud_name", "djespjbgy");
     fetch("  https://api.cloudinary.com/v1_1/djespjbgy/image/upload", {
       method: "get",
       body: data,
     })
       .then((resp) => resp.json())
       .then((data) => {
         setUrl2(data.url);
       })
       .catch((err) => console.log(err));
   };
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button onClick={uploadImage}>Upload</button>
        <button onClick={getImage}>Get</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} />
        <img
          src={
            "https://res.cloudinary.com/djespjbgy/image/upload/v1661943206/t8dx8tsmzbbapbhrioww.png"
          }
        />
      </div>
    </div>
  );
};
export default App;
