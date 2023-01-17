import { connect } from "react-redux";
import ShortVehicle from "./View.js";
import { fetchProviders } from "../../../actions/providerActions";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    bikes: state.bike.bikes,
    isLoading: state.user.isLoading,
    alert: state.alert,
    user: state.auth.user,
    current: state.bike.current,
    loading: state.bike.loading,
    authorization: state.auth.authorization,
    providers: state.provider.providers
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchBike: (query) => dispatch(fetchBike(query)),
    fetchProviders: () => dispatch(fetchProviders())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortVehicle);
