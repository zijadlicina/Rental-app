import { Alert } from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import "./AlertBox.css";

function AlertBox({alert}) {
  const [active, setActive] = useState(1);
  return (
    <div className="alertbox">
        <Alert>
            {alert.message}
        </Alert>
    </div>
  );
}

export default AlertBox;
