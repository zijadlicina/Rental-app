import { connect } from "react-redux";
import Item from "./View.js";

const mapStateToProps = (state) => {
  return {
    isLoadingUser: state.user.isLoading,
    users: state.user.users,
    bikes: state.bike.bikes,
    authorization: state.auth.authorization
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
   // fetchBikes: (query) => {dispatch(fetchBikes(query))},
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
