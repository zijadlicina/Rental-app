import { connect } from "react-redux";
import ModalItem from "./View.js";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    isLoading: state.user.isLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalItem);
