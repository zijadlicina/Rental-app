import { connect } from "react-redux";
import User from "./View.js";
import { fetchOneProvider } from "../../../../actions/providerActions.js";
import { fetchBikes } from "../../../../actions/bikeActions";
import { fetchRentals } from "../../../../actions/rentalsActions";

const mapStateToProps = (state) => {
  return {
    authorization: state.auth.authorization,
    isLoading: state.bike.loading,
    user: state.auth.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBikes: (query) => { dispatch(fetchBikes(query))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
