import { connect } from "react-redux";
import { rejectRental } from "../../../../actions/rentalsActions.js";
import ModalReject from "./View.js";

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    user: state.auth.user,
    isLoading: state.user.isLoading,
    rentals: state.rental.rentals
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    rejectRental: (id, reasonMessage, setReload) => {
      const data = {
        status: false,
        reasonMessage,
        reqRejected: new Date().toLocaleString("en-US", {timeZone: "Europe/Berlin"})
      }
      dispatch(rejectRental(id, data, setReload))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalReject);
