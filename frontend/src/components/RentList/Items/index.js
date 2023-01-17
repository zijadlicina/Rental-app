import { connect } from "react-redux";
import Items from "./View.js";
import { fetchUsers } from "../../../actions/userActions";
import { fetchBikes } from "../../../actions/bikeActions";
import { fetchProviders } from "../../../actions/providerActions";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    bikes: state.bike.bikes,
    isLoading: state.user.isLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (query) => dispatch(fetchUsers(query)),
    fetchBikes: (query) => dispatch(fetchBikes(query)),
    fetchProviders: (query) => dispatch(fetchProviders(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
