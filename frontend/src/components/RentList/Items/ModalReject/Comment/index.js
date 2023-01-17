import { connect } from "react-redux";
import Comment from "./View.js";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    isLoading: state.user.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
