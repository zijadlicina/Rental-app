import {
    CHANGE_CURRENT_TAB
} from "../actions/types"

const initialState = {
    currentTab: "home"
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_TAB:
          return {
            ...state,
            currentTab: action.payload
          }
        default:
            return state;
    }
}

export default menuReducer