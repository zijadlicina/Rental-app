import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions.js";
import Navbar from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      logout: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
