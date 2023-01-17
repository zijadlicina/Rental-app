import { connect } from "react-redux";
import VehicleShort from "./View.js";

const mapStateToProps = (state) => {
  return {
    providers: state.provider.providers
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleShort);
