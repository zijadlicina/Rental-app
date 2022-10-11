import { connect } from "react-redux";
import Review from "./View.js";
import { fetchReviews } from "../../../../../actions/bikeActions";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    bikes: state.bike.bikes,
    isLoading: state.user.isLoading,
    alert: state.alert
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: (id) => dispatch(fetchReviews(id))
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
