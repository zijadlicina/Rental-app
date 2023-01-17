import { connect } from "react-redux";
import { loadUser } from "../../../actions/authActions.js";
import { changeCurrentTab } from "../../../actions/menuActions";

import HomeSlider from "./View.js";

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loadUser()),
    changeCurrentTab: (data) => dispatch(changeCurrentTab(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeSlider);
