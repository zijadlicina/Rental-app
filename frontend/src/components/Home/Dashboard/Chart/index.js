import { connect } from "react-redux";
import Activity from "./View.js";

const mapStateToProps = (state) => {
  return {
    authorization: state.auth.authorization,
    bikesProvider: state.bike.bikes,
    bike: state.bike.bikes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
