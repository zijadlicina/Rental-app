import { useEffect, useState, useRef } from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About/View";
import Rental from "./components/Rental";
import Rent from "./components/Rent";
import Vehicle from "./components/Vehicle";
import AddRental from "./components/AddRental";
import Register from "./components/Register";
import Error from "./components/Error/View";
import Footer from "./components/Footer/View";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ForgotPassword/ResetPassword";
import RentList from "./components/RentList";
import Private from "./components/Private";

import { loadUser } from "./actions/authActions";
import { fetchBikes } from "./actions/bikeActions";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  
  const rentsRef = useRef({})
  return (
    <Provider store={store} >
      <Router>
        <Navbar rentsRef={rentsRef}/>
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
            <Route exact path="/about" element={<About />} />{" "}
          <Route exact path="/rental" element={<Rental />} />{" "}
          <Route
            exact
            path="/rental/add"
            element={<Private Component={AddRental} />}
          />
          <Route exact path="/rental/rent/:user/:bike" element={<Rent />} />{" "}
          <Route exact path="/rents" element={<RentList rentsRef={rentsRef}/>} />{" "}
          <Route
            exact
            path="/vehicle/:id"
            element={<Vehicle />}
          />{" "}
          <Route exact path="/register" element={<Register />} />{" "}
          <Route exact path="/login" element={<Login />} />{" "}
          <Route exact path="/:id" element={<Home />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/resetPassword" element={<ResetPassword />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
