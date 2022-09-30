import { connect } from "react-redux";
import Items from "./View.js";
import { fetchUsers } from "../../../actions/userActions";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    isLoading: state.user.isLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (query) => dispatch(fetchUsers(query)),
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
