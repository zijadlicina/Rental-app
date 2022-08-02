import { connect } from "react-redux";
import { forgotPassword } from "../../actions/authActions";
import ForgotPassword from "./View.js";

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    forgotPassword: (email) => dispatch(forgotPassword(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
