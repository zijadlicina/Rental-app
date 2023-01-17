import { CHANGE_CURRENT_TAB } from "./types";

export const changeCurrentTab = (tab) => {
    return {
        type: CHANGE_CURRENT_TAB,
        payload: tab
    }
}
