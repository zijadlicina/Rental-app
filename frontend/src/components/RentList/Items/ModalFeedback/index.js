import { connect } from "react-redux";
import ModalFeedback from "./View.js";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    user: state.auth.user,
    isLoading: state.user.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalFeedback);
