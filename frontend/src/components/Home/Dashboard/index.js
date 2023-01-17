import { connect } from "react-redux";
import { forgotPassword } from "../../../actions/authActions";
import { fetchOneProvider } from "../../../actions/providerActions.js";
import Dashboard from "./View.js";

const mapStateToProps = (state) => {
  return {
    authorization: state.auth.authorization,
    user: state.auth.user,
    provider: state.provider.provider
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    forgotPassword: (email) => dispatch(forgotPassword(email)),
    fetchProvider: (id) => dispatch(fetchOneProvider(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
