import { connect } from "react-redux";
import { cleanAlert } from "../../actions/alertActions";
import { fetchBikes } from "../../actions/bikeActions";
import { fetchRentals} from "../../actions/rentalsActions";
import RentList from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    userState: state.auth.user,
    rentals: state.rental.rentals,
    isLoading: state.rental.isLoading,
    authorization: state.auth.authorization,
    user: state.auth.user,
    alert: state.alert,
    isLoading: state.rental.isLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRentals: (query) => dispatch(fetchRentals(query)),
    fetchBikes: (query) => {dispatch(fetchBikes(query))},
    cleanAlert: () => dispatch(cleanAlert())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RentList);
