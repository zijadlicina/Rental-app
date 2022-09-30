import { connect } from "react-redux";
import UserRent from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    authorization: state.auth.authorization
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRent);
