import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Login from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    userState: state.auth.user,
    loading: state.auth.isLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user) => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
