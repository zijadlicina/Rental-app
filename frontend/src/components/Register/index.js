import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import Register from "./View.js";

const mapStateToProps = (state) => {
  return {
    error: state.error.msg,
    isAuthenticated: state.auth.isAuthenticated,
    userState: state.auth.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user, navigate) => dispatch(registerUser(user, navigate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
