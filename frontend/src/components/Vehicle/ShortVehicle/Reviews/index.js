import { connect } from "react-redux";
import Reviews from "./View.js";
import { fetchReviews } from "../../../../actions/bikeActions";
import { fetchUsers } from "../../../../actions/userActions";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    bikes: state.bike.bikes,
    loading: state.bike.loading,
    reviews: state.bike.reviews
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: (id) => dispatch(fetchReviews(id)),
    fetchUsers: () => dispatch(fetchUsers())
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
