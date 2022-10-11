import React from "react";
import "./Tabs.css";

function Tabs({ tabs, setTabCurrent, tabCurrent }) {
  return (
    <div className="tabs">
      {tabs.map((tab, id) => {
        return (
          <div
            className={id === tabCurrent ? "active tab" : "tab"}
            onClick={() => setTabCurrent(id)}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
