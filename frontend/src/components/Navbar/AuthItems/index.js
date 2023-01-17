import { connect } from "react-redux";
import { fetchUsers } from "../../../actions/userActions";
import { logoutUser } from "../../../actions/authActions";
import { fetchMessages } from "../../../actions/messageActions.js";
import AuthItems from "./View.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    authorization: state.auth.authorization,
    messages: state.message.messages,
    messagesInbox: state.message.messagesInbox,
    message: state.message,
    bike: state.bike,
    rentals: state.rental.rentals,
    unSeen: state.message.unSeen
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      logout: () => dispatch(logoutUser()),
      fetchMessages: (id) => dispatch(fetchMessages(id)),
      fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthItems);
