import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./HomeSlider.css";
import headingImage from '../../../images/pexels-rahul-pandit-1020136.jpg'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const HomeSlider = ({homeItems, changeCurrentTab}) => {
    const navigate = useNavigate()
  const [itemCurrent, setItemCurrent] = useState(0)
  const [stopTimer, setStopTimer] = useState(false)

  // slider
  useEffect(() => {
    const timer = setTimeout(() => {
        if (!stopTimer) handleSlider("right")
    }, 3000);
    return () => clearTimeout(timer);
  });

  const handleSlider = (type) => {
    if (type === "left"){
        if (itemCurrent - 1 < 0) setItemCurrent(homeItems.length - 1);
        else 
        setItemCurrent((prev) => {
            return prev - 1;
        })
    } else {
        if (itemCurrent + 1 > homeItems.length - 1) setItemCurrent(0);
        else
        setItemCurrent((prev) => {
            return prev + 1;
        })
    }
  }

  return (
    <div className="home-slider">
        <div className="heading" onMouseEnter={() => setStopTimer(!stopTimer)} onMouseLeave={() => setStopTimer(!stopTimer)}>
            <span onClick={() => handleSlider("left")}><AiOutlineLeft className="arrow"/></span>
                <div>
                    <h2>{homeItems[itemCurrent].h1}</h2>
                    <h3>{homeItems[itemCurrent].p}</h3>
                    <button onClick={() => {navigate("/rental"); changeCurrentTab("rental")}} className="cta-btn">Rent Now</button>
                </div>
            <img src={homeItems[itemCurrent].image}></img>
            <span onClick={() => handleSlider("right")}><AiOutlineRight className="arrow"/></span>
        </div>
        <div className="circles">
            {homeItems.map((item, id) => {
                return <div className={id === itemCurrent ? "circle active" : "circle"}></div>
            })}
        </div>
    </div>
  );
};


export default HomeSlider;
