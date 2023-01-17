import "./Home.css";
import Profile from "./Profile";
import Loading from "./Loading";
import homeImage from '../../images/mr-great-heart-vPeTALtyj4Y-unsplash.jpg'
import imgTown from '../../images/azur-golic-Mmc_MeciQD0-unsplash.jpg'
import headingImageBikes from "../../images/terry-jaskiw-DwXDCmzQiLM-unsplash.jpg"
import headingImageScooters from "../../images/gaurav-c-NgN5N3OIldI-unsplash.jpg"
import Tabs from "./Tabs";
import HomeSlider from "./HomeSlider";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

let tabs = ["by bike", "by scooter", "by e-bike"]
let homeItems = [
  {h1: "Rent your bike", p: "Go and explore your town!", image: homeImage},
  {h1: "Rent your bike", p: "Go and explore your town!", image: headingImageBikes},
  {h1: "Rent your scooter", p: "Go and explore your your town!", image: headingImageScooters},
]

const Home = ({ isAuthenticated, isLoading, dropDownUser }) => {
  if (isAuthenticated) {
    return <Dashboard/>;
  }
  return (
    <div className="home-div">
      <div className="home-container">
      <HomeSlider homeItems={homeItems}/>
      <div className="about">
      <img src={imgTown}></img>
        <div>
          <h2>Meet Sarajevo</h2>
          <h3>The Olympic city is waiting for you</h3>
          <p>Sarajevo is one of the most historically interesting
and varied cities in Europe.</p>
          <p>It has been both an example of historical turbulence
and the clash of civilizations, as well as a beacon of
hope for peace and tolerance through multi-cultural
integration.</p>
        </div>
      </div>
      <div className="testiomonials">
        <h2>Testiomonials</h2>
        <h3>What other people are saying about us</h3>
        <div className="boxes">
          <div>Great experience in
          your town!</div>
<div>Great experience in
Sarajevo!</div>
<div>Great experience in
your town!</div>
        </div>
      </div>
      <div className="items">
        <div className="text">
          <Tabs tabs={tabs} />
          <p>Sarajevo has a brand new bike path from Ilidža to
            Hrasno neighborhood.</p>
          <p>Bike path will run on both sides of the main avenue
            (along the tram line).
          </p>
          <button>Read more</button>
        </div>
        <img src={homeImage}></img>
      </div>
      </div>
    </div>
  );
};

export default Home;
