import { connect } from "react-redux";
import ShortAgency from "./View.js";
import { approveRental, rejectRental, completedRental } from "../../../../../../actions/rentalsActions";

const mapStateToProps = (state) => {
  return {
    isLoadingUser: state.user.isLoading,
    users: state.user.users,
    bikes: state.bike.bikes,
    providers: state.provider.providers,
    authorization: state.auth.authorization,
    provUser: state.auth.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    approveRental: (id, setReload) => {
      const data = {
        status: true,
        reqApproved: new Date().toLocaleString("en-US", {timeZone: "Europe/Berlin"})
      }
    
      dispatch(approveRental(id, data, setReload))
    },
    rejectRental: (id) => {
      const data = {
        status: false,
      }
      dispatch(rejectRental(id, data))
    },
    completeRental: (id) => {
      const data = {
        completed: true,
        reqCompleted: new Date().toLocaleString("en-US", {timeZone: "Europe/Berlin"})
      }
      dispatch(completedRental(id, data))
    }
    //  fetchBike: (query) => dispatch(fetchBike(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortAgency);
