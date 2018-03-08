import {
    API_DELETE_USER_DETAILS,
    API_DELETE_USER_DETAILS_FAILURE,
    API_DELETE_USER_DETAILS_SUCCESS,
    API_GET_USER_DETAILS,
    API_GET_USER_DETAILS_FAILURE,
    API_GET_USER_DETAILS_SUCCESS,
    API_SET_PROFILE_PIC_ACTION,
    API_SET_PROFILE_PIC_FAILURE,
    API_SET_PROFILE_PIC_SUCCESS,
    API_SET_USER_DETAILS,
    API_SET_USER_DETAILS_CLEAN,
    API_SET_USER_DETAILS_FAILURE,
    API_SET_USER_DETAILS_SUCCESS,
    API_SET_USER_INFO,
    API_SET_USER_INFO_FAILURE,
    API_SET_USER_INFO_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    "deleteUserDetailsResponce": null,
    "errorDeleteUserDetails": null,
    "errorGetUserDetails": null,
    "errorSetUserDetails": null,
    "errorSetUserInfo": null,
    "errorSetUserPic": null,
    "getUserDetailsResponce": null,
    "loaderGetUserDetails": false,
    "loaderSetUserDetails": false,
    "setUserDetailsResponce": null,
    "setUserInfoResponce": null,
    "setUserPicResponce": null

};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

    case API_GET_USER_DETAILS:
        return {
            ...state,
            "deleteUserDetailsResponce": null,
            "errorDeleteUserDetails": null,
            "errorGetUserDetails": null,
            "errorSetUserDetails": null,
            "errorSetUserInfo": null,
            "errorSetUserPic": null,
            "getUserDetailsResponce": null,
            "loaderGetUserDetails": true,
            "loaderSetUserDetails": false,
            "setUserDetailsResponce": null,
            "setUserInfoResponce": null,
            "setUserPicResponce": null
        };
    case API_GET_USER_DETAILS_SUCCESS:
        return {
            ...state,
            "errorGetUserDetails": null,
            "loaderGetUserDetails": false,
            "getUserDetailsResponce": action.payload
        };
    case API_GET_USER_DETAILS_FAILURE:
        return {
            ...state,
            "errorGetUserDetails": action.payload,
            "loaderGetUserDetails": false,
            "getUserDetailsResponce": null
        };
    case API_DELETE_USER_DETAILS:
        return {
            ...state,
            "deleteUserDetailsResponce": null,
            "errorDeleteUserDetails": null,
            "errorGetUserDetails": null,
            "errorSetUserDetails": null,
            "errorSetUserInfo": null,
            "errorSetUserPic": null,
            "getUserDetailsResponce": null,
            "loaderGetUserDetails": true,
            "loaderSetUserDetails": false,
            "setUserDetailsResponce": null,
            "setUserInfoResponce": null,
            "setUserPicResponce": null
        };
    case API_DELETE_USER_DETAILS_SUCCESS:
        return {
            ...state,
            "errorDeleteUserDetails": null,
            "loaderGetUserDetails": false,
            "deleteUserDetailsResponce": action.payload
        };
    case API_DELETE_USER_DETAILS_FAILURE:
        return {
            ...state,
            "errorDeleteUserDetails": action.payload,
            "loaderGetUserDetails": false,
            "deleteUserDetailsResponce": null
        };
    case API_SET_USER_DETAILS:
        return {
            ...state,
            "errorSetUserDetails": null,
            "loaderSetUserDetails": true,
            "setUserDetailsResponce": null
        };
    case API_SET_USER_DETAILS_SUCCESS:
        return {
            ...state,
            "errorSetUserDetails": null,
            "loaderSetUserDetails": false,
            "setUserDetailsResponce": action.payload
        };
    case API_SET_USER_DETAILS_FAILURE:
        return {
            ...state,
            "errorSetUserDetails": action.payload,
            "loaderSetUserDetails": false,
            "setUserDetailsResponce": null
        };
    case API_SET_USER_DETAILS_CLEAN:
        return {
            ...state,
            "errorSetUserDetails": null,
            "loaderSetUserDetails": false,
            "setUserDetailsResponce": null
        };
    case API_SET_USER_INFO:
        return {
            ...state,
            "deleteUserDetailsResponce": null,
            "errorDeleteUserDetails": null,
            "errorGetUserDetails": null,
            "errorSetUserDetails": null,
            "errorSetUserInfo": null,
            "errorSetUserPic": null,
            "getUserDetailsResponce": null,
            "loaderGetUserDetails": true,
            "loaderSetUserDetails": false,
            "setUserDetailsResponce": null,
            "setUserInfoResponce": null,
            "setUserPicResponce": null
        };
    case API_SET_USER_INFO_SUCCESS:
        return {
            ...state,
            "errorSetUserInfo": action.payload,
            "loaderGetUserDetails": false,
            "setUserInfoResponce": null
        };
    case API_SET_USER_INFO_FAILURE:
        return {
            ...state,
            "errorSetUserInfo": null,
            "loaderGetUserDetails": false,
            "setUserInfoResponce": null
        };
    case API_SET_PROFILE_PIC_ACTION:
        return {
            ...state,
            "deleteUserDetailsResponce": null,
            "errorDeleteUserDetails": null,
            "errorGetUserDetails": null,
            "errorSetUserDetails": null,
            "errorSetUserInfo": null,
            "errorSetUserPic": null,
            "getUserDetailsResponce": null,
            "loaderGetUserDetails": true,
            "loaderSetUserDetails": false,
            "setUserDetailsResponce": null,
            "setUserInfoResponce": null,
            "setUserPicResponce": null
        };
    case API_SET_PROFILE_PIC_FAILURE:
        return {
            ...state,
            "errorSetUserPic": action.payload,
            "loaderGetUserDetails": false,
            "setUserPicResponce": null
        };
    case API_SET_PROFILE_PIC_SUCCESS:
        return {
            ...state,
            "errorSetUserPic": null,
            "loaderGetUserDetails": false,
            "setUserPicResponce": action.payload
        };
    default:
        return state;

    }

};
