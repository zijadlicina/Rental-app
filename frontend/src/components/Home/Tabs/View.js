import React, { useState } from "react";
import "./Tabs.css";

function Tabs({ tabs }) {
  const [tabCurrent, setTabCurrent] = useState(0)
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
