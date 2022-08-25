import { connect } from "react-redux";
import { } from "../../actions/authActions";
import Rental from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    userState: state.auth.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rental);
