import { connect } from "react-redux";
import Tabs from "./View.js";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    bikes: state.bike.bikes,
    isLoading: state.user.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
