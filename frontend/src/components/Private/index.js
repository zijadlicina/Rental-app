import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Private from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    authorization: state.auth.authorization,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
   // userLogin: (user) => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Private);
