import { connect } from "react-redux";
import { fetchOneProvider } from "../../../../actions/providerActions.js";
import { fetchBikes } from "../../../../actions/bikeActions";
import { fetchRentals } from "../../../../actions/rentalsActions";
import { fetchProviders } from "../../../../actions/providerActions";

import Agency from "./View.js";

const mapStateToProps = (state) => {
  return {
    authorization: state.auth.authorization,
    user: state.auth.user,
    provider: state.provider.provider,
    bikes: state.bike.bikes,
    isLoading: state.rental.isLoading,
    providers: state.provider.providers
  };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProvider: (id) => dispatch(fetchOneProvider(id)),
        fetchBikes: (query) => dispatch(fetchBikes(query)),
        fetchRentals: (query) => dispatch(fetchRentals(query)),
        fetchProviders: () => dispatch(fetchProviders())
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(Agency);
