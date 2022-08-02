import { connect } from "react-redux";
import Home from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
