import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";

const Profile = ({ user, loadUser }) => {
  const {id} = useParams()
  
  return (
    <div>
      <h2>Welcome {user.username}</h2>
      <ul>
        <li>
          <p style={pStyle}>Username: </p>
          <p style={resStyle}>{user.username}</p>
        </li>
        <li>
          <p style={pStyle}>Name and Surname:</p>
          <p style={resStyle}>
            {user.name} {user.surname}
          </p>
        </li>
        <li>
          <p style={pStyle}>Location:</p>
          <p style={resStyle}>{user.location}</p>
        </li>
        <li>
          <p style={pStyle}>Contact:</p>
          <p style={resStyle}>{user.contact}</p>
        </li>
      </ul>
    </div>
  );
};
var divStyle = {
  padding: "20px",
  margin: "auto",
  width: "40%"
}
var pStyle = {
  color: "#245373",
  fontSize: "21px"
};
var resStyle = {
  color: "#245373",
  fontSize: "20px",
  fontStyle: "italic"
};


export default Profile;
