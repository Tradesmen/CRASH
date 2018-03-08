import {
    GET_USER_CURRENT_ADDRESS,
    USER_CURRENT_ADDRESS_SUCCESS,
    USER_CURRENT_ADDRESS_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
    "userAddress": null,
    "errorUserAddress": ""
}

/**
 * Map Reducer - Reducer for map address module.
 * @param {Any} state previous state
 * @param {Any} action action type
 * @returns {Any} new state
 */
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_CURRENT_ADDRESS:
            return {
                ...state,
                "userAddress": null,
                "errorUserAddress": ""
            };
        case USER_CURRENT_ADDRESS_SUCCESS:
            return {
                ...state,
                "userAddress": action.payload,
                "errorUserAddress": ""
            };
        case USER_CURRENT_ADDRESS_FAILURE:
            return {
                ...state,
                "userAddress": null,
                "errorUserAddress": action.payload
            };
        default:
            return state;
    }
}