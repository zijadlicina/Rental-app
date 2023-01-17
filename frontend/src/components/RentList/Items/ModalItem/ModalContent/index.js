import { connect } from "react-redux";
import ModalContent from "./View.js";

const mapStateToProps = (state) => {
  return {
    authorization: state.auth.authorization
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
