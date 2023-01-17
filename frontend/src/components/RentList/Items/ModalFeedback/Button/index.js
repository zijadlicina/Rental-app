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
    addFeedback: (feed, navigate, rental) => {
      feed.grade += 1;
      feed.feedbackSent = new Date().toLocaleString("en-US", {timeZone: "Europe/Berlin"});
      dispatch(addFeedback(feed, navigate, rental))
    } 
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
