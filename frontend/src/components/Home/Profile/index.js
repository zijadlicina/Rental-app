import { connect } from "react-redux";
import { loadUser } from "../../../actions/authActions.js";
import Profile from "./View.js";

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loadUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
