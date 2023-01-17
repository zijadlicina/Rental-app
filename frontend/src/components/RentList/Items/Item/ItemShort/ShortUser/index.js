import { connect } from "react-redux";
import ShortUser from "./View.js";

const mapStateToProps = (state) => {
  return {
    isLoadingUser: state.user.isLoading,
    users: state.user.users,
    bikes: state.bike.bikes,
    providers: state.provider.providers,
    authorization: state.auth.authorization,
    provider: state.provider.provider
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortUser);
