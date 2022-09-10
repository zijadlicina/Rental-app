import { connect } from "react-redux";
import { fetchBikes, getCategory } from "../../actions/bikeActions";
import Rental from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    userState: state.auth.user,
    items: state.bike.bikes,
    statePage: state.bike.page,
    loading: state.bike.loading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBikes: (query) => dispatch(fetchBikes(query)),
    getCategory: (id) => dispatch(getCategory(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rental);
