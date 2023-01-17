import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions.js";
import { updateMessage } from "../../../actions/messageActions";
import DropDown from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    authorization: state.auth.authorization,
    users: state.user.users,
    message: state.message
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      logout: () => dispatch(logoutUser()),
      updateMessage: (id, status, setRefreshNavbar) => dispatch(updateMessage(id, status, setRefreshNavbar))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
