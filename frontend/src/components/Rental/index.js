import { connect } from "react-redux";
import { cleanAlert } from "../../actions/alertActions";
import { fetchBikes } from "../../actions/bikeActions";
import Rental from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    userState: state.auth.user,
    items: state.bike.bikes,
    statePage: state.bike.page,
    loading: state.bike.loading,
    authorization: state.auth.authorization,
    alert: state.alert,
    providerState: state.provider.provider
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBikes: (query) => {
      //  scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      dispatch(fetchBikes(query))
    },
    cleanAlert: () => dispatch(cleanAlert())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rental);
