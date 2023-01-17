import { connect } from "react-redux";
import Activity from "./View.js";

const mapStateToProps = (state) => {
  return {
    authorization: state.auth.authorization
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
