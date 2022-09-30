import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Rent from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    userState: state.auth.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user) => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rent);
