import { connect } from "react-redux";
import Categories from "./View.js";

const mapStateToProps = (state) => {
  return {
    authorization: state.auth.authorization,
    provider: state.provider.provider,
    alert: state.alert
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
