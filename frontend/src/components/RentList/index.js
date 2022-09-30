import { connect } from "react-redux";
import { fetchRentals } from "../../actions/rentalsActions";
import RentList from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    userState: state.auth.user,
    rentals: state.rental.rentals,
    isLoading: state.rental.isLoading,
    authorization: state.auth.authorization,
    user: state.auth.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRentals: (query) => dispatch(fetchRentals(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RentList);
