import {
    FETCH_ONE_PROVIDER,
    FETCH_ONE_PROVIDER_SUCCES,
    CLEAN_PROVIDER,
    FETCH_PROVIDERS_REQ,
    FETCH_PROVIDERS_SUCCES
  } from "../actions/types";
  
  
  const initialState = {
    provider: null,
    providers: [],
    isLoading: false
  };
  
  const providerReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ONE_PROVIDER:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_ONE_PROVIDER_SUCCES:
        return {
          ...state,
          isLoading: false,
          provider: action.payload.provider
        };
        case FETCH_PROVIDERS_REQ:
          return {
            ...state,
            isLoading: true
          };
        case FETCH_PROVIDERS_SUCCES:
          return {
            ...state,
            isLoading: false,
            providers: action.payload.providers
          };
        case CLEAN_PROVIDER:
        return {
          ...state,
          isLoading: false,
          provider: null
        };
      default:
        return state;
    }
  };
  
  export default providerReducer;
  