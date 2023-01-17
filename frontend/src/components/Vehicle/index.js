import { connect } from "react-redux";
import Vehicle from "./View.js";
import { fetchOneBike } from "../../actions/bikeActions.js";
import { cleanAlert } from "../../actions/alertActions";
import { fetchProviders } from "../../actions/providerActions";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    bikes: state.bike.bikes,
    isLoading: state.bike.loading,
    current: state.bike.current,
    alert: state.alert,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
   // fetchBikes: () => dispatch(fetchBikes("limit=20")),
    fetchOneBike: (query) => dispatch(fetchOneBike(query.id)),
    cleanAlert: () => dispatch(cleanAlert()),
    fetchProviders: () => dispatch(fetchProviders())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
