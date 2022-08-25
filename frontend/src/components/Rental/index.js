import { connect } from "react-redux";
import {  } from "../../actions/authActions.js";
import { fetchBikes } from "../../actions/bikeActions.js";
import Rental from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    bikes: state.bike.bikes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBikes: (category) => dispatch(fetchBikes(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rental);
