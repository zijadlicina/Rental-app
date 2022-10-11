import { connect } from "react-redux";
import Vehicle from "./View.js";

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
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
