import "./Home.module.css";
import Profile from "./Profile";
import Loading from "./Loading";
import homeImage from '../../images/pexels-rahul-pandit-1020136.jpg'
import { useEffect } from "react";

const Home = ({ isAuthenticated, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (isAuthenticated) {
    return <Profile />;
  }
  return (
    <div style={mainStyle}>
      <div style={{float: "left", width: "30%"}}>.
      </div>
      <div style={heading}>
        <h1>Rent your bike</h1>
        <h3>Go and explore Sarajevo</h3>
      </div>
      <div>
        <img src={homeImage} style={imageStyle} alt="home image"></img>
      </div>
    </div>
  );
};

var mainStyle = {
  paddingTop: "100px",
  height: "400px",
  width: "auto",
  backgroundColor: "white",
};
var heading = {
  float: "left",
  width: "30%",
  textTransform: "uppercase",
  color: "#245373",
  fontSize: "20px",
};
var imageStyle = {
  height: "300px",
  width: "250px",
  border: "2px solid white",
  borderRadius: "15px",
  opacity: "0.8"
};

export default Home;
