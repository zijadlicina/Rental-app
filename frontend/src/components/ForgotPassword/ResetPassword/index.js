import { connect } from "react-redux";
import { resetPassword } from "../../../actions/authActions";
import ResetPassword from "./View.js";

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (object) => dispatch(resetPassword(object)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
