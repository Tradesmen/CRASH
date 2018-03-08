import {GET_USER_CURRENT_ADDRESS} from "./types";

/**
 * MapActions - Actions related to get current address of user.
 */

export const getUserCurrentAddress = ({lat, long}) => ({
    "type": GET_USER_CURRENT_ADDRESS,
    lat,
    long
});