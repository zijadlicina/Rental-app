import "./Rental.css";
import { useEffect, useState } from "react";
import Items from "./Items/items";

let array = ["All"];

const Rental = ({ fetchBikes, bikes, isAuthenticated }) => {
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState("All");
  const [items, setItems] = useState(bikes);

  const fetchTabs = () => {
    items.map((item) => {
      array.push(item.category);
    });
    let array2 = [];
    array2 = Array.from(new Set(array));
    setTabs(array2);
  };

  const changeCurrentTab = (tab) => {
    setCurrentTab(tab);
  };
  const changeItems = () => {
    let array = bikes;
    if (currentTab === "All") {
      setItems(bikes);
      return;
    }
    let array2 = [];
    array.map((item) => {
      if (item.category === currentTab) array2.push(item);
    });
    setItems(array2);
  };

  useEffect(() => {
    fetchTabs();
    changeItems()

  }, [currentTab]);
  const aa = () => {
    // id_catgory
    // poslati u fetchBikes
  }
  return (
    <div style={mainStyle}>
      <h2>Rent your vehicle</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        laudantium libero repudiandae ut quo sed! Libero blanditiis, voluptatum
        fuga quis vero molestias iste debitis qui voluptates rerum velit eveniet
        dolorum.
      </p>
      <div style={{ marginLeft: "180px", marginBottom: "30px" }}>
        {tabs.map((tab) => {
          return (
            <div
              style={{
                cursor: "pointer",
                borderLeft: "3px solid blue",
                padding: "0px 10px",
                float: "left",
                background: "lightgrey",
                margin: "0px 10px",
                borderRadius: "3px",
                width: "130px",
              }}
              onClick={() => changeCurrentTab(tab)}
            >
              {tab}
            </div>
          );
        })}
      </div>
      <Items items={items}isAuthenticated={isAuthenticated} />
    </div>
  );
};
var mainStyle = {
  background: "rgb(76,115,245)",
  background:
    "linear-gradient(90deg, rgba(76,115,245,1) 0%, rgba(178,172,243,1) 100%)",
  padding: "5px 250px",
  height: "650px",
};
export default Rental;
