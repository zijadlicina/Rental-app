import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About/View";
import Rental from "./components/Rental";
import Rent from "./components/Rent";
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
    console.log("refresh")
    store.dispatch(loadUser());
    store.dispatch(fetchBikes());
  });
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
          {"???? - da li '/' ili '/:id'"}
          <Route exact path="/about" element={<About />} />{" "}
          <Route exact path="/rental" element={<Rental />} />{" "}
          <Route
            exact
            path="/rental/add"
            element={<Private Component={AddRental} />}
          />
          <Route exact path="/rental/rent/:user/:bike" element={<Rent />} />{" "}
          <Route exact path="/rents" element={<RentList />} />{" "}
          <Route exact path="/register" element={<Register />} />{" "}
          <Route exact path="/login" element={<Login />} />{" "}
          <Route exact path="/:id" element={<Home />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/resetPassword" element={<ResetPassword />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
