import React from "react";
import Login from "../Login";

function View({ Component, isAuthenticated, authorization }) {
  const { isAdmin, isUser, isAgency } = authorization;
  return <>{isAdmin || isAgency ? <Component /> : <Login />}</>;
}

export default View;
