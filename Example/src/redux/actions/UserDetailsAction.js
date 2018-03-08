import {
    API_DELETE_USER_DETAILS,
    API_GET_USER_DETAILS,
    API_SET_USER_DETAILS,
    API_SET_USER_DETAILS_CLEAN,
    API_SET_USER_INFO
} from "./types";

export const getUserDetailsAction = () => ({"type": API_GET_USER_DETAILS});

export const deleteUserDetailsAction = ({model, itemId}) => ({
    "type": API_DELETE_USER_DETAILS,
    model,
    itemId
});

export const setUserDetailsAction = ({validatedData}) => ({
    validatedData,
    "type": API_SET_USER_DETAILS
});

export const cleanSetUserDetailsAction = () => ({"type": API_SET_USER_DETAILS_CLEAN});

export const setUserInfoAction = ({data}) => ({
    data,
    "type": API_SET_USER_INFO
});


