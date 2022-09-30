import { connect } from "react-redux";
import Timeline from "./View.js";

const mapStateToProps = (state) => {
  return {
    isLoadingUser: state.user.isLoading,
    users: state.user.users,
    bikes: state.bike.bikes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
