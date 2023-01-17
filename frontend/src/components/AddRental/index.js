import { connect } from "react-redux";
import { addBike } from "../../actions/bikeActions";
import AddHandler from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    userState: state.auth.user,
    loading: state.bike.loading,
    provider: state.provider.provider
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (navigate, bike) => dispatch(addBike(navigate, bike)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddHandler);
