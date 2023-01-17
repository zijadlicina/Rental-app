import { connect } from "react-redux";
import Activity from "./View.js";

const mapStateToProps = (state) => {
  return {
    authorization: state.auth.authorization,
    rentals: state.rental.rentals,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
