import { connect } from "react-redux";
import Pagination from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    userState: state.auth.user,
    pages: state.bike.pages
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
