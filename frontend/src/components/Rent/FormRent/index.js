import { connect } from "react-redux";
import FormRent from "./View.js";
import { fetchOneBike } from "../../../actions/bikeActions";
import { addRental } from "../../../actions/rentalsActions.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    current: state.bike.current,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchOneBike: (id) => dispatch(fetchOneBike(id)),
    addRental: (rent) => dispatch(addRental(rent)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRent);
