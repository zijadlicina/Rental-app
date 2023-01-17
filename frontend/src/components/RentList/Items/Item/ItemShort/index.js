import { connect } from "react-redux";
import ItemShort from "./View.js";

const mapStateToProps = (state) => {
  return {
    isLoadingUser: state.user.isLoading,
    users: state.user.users,
    bikes: state.bike.bikes,
    providers: state.provider.providers,
    authorization: state.auth.authorization
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShort);
