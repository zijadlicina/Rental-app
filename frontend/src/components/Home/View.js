import "./Home.module.css";
import Profile from "./Profile";
import Loading from "./Loading";

const Home = ({ isAuthenticated, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (isAuthenticated) {
    return <Profile />;
  }
  return (
    <div className="main" style={mainStyle}>
      <div style={heading}>
        <h1>Rent your bike</h1>
        <h2>Go and explore Sarajevo</h2>
      </div>
      <div>
        
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
  width: "60%",
  textAlign: "center",
  textTransform: "uppercase",
  color: "#245373",
  fontSize: "15px",
};

export default Home;
