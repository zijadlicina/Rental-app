import { connect } from "react-redux";
import FormRent from "./View.js";
import { fetchOneBike } from "../../../actions/bikeActions";
import { addRental } from "../../../actions/rentalsActions.js";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg,
    current: state.bike.current,
    user: state.auth.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchOneBike: (id, setIsFetched) => dispatch(fetchOneBike(id, setIsFetched)),
    addRental: (navigate, to, rent) => {  
      rent.reqSent = new Date().toLocaleString("en-US", {timeZone: "Europe/Berlin"})
      let outDateObject = new Date(rent.dateOut)
      let returnedDateObject = new Date(rent.dateReturned)
      setTimeToDate(rent.timeOut, outDateObject)
      setTimeToDate(rent.timeReturned, returnedDateObject)
      rent.dateOut = outDateObject.toLocaleString("en-US", {timeZone: "Europe/Berlin"});
      rent.dateReturned = returnedDateObject.toLocaleString("en-US", {timeZone: "Europe/Berlin"});
    //  console.log("rennt", rent)
      dispatch(addRental(navigate, to, rent))
    } 
  };
};

const setTimeToDate = (time, date) => {
  let arr = time.split(":")
  date.setHours(arr[0])
  date.setMinutes(arr[1])
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRent);
