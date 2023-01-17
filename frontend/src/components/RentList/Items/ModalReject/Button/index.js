import { connect } from "react-redux";
import { addFeedback } from "../../../../../actions/bikeActions.js";
import Button from "./View.js";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    isLoading: state.user.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFeedback: (feed) => {
      feed.grade += 1;
      dispatch(addFeedback(feed))
    } 
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
