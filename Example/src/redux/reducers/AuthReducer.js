import {
    API_EMAIL_ACTIVATE_ACTION,
    API_EMAIL_ACTIVATE_FAILUE_ACTION,
    API_EMAIL_ACTIVATE_SUCCESS_ACTION,
    API_FORGOT_PASSWORD_ACTION,
    API_FORGOT_PASSWORD_FAILURE_ACTION,
    API_FORGOT_PASSWORD_SUCCESS_ACTION,
    API_SET_NEW_PASSWORD_ACTION,
    API_SET_NEW_PASSWORD_FAILURE_ACTION,
    API_SET_NEW_PASSWORD_SUCCESS_ACTION,
    API_SIGNIN_ACTION,
    API_SIGNIN_FAILURE_ACTION,
    API_SIGNIN_SUCCESS_ACTION,
    API_SIGNUP_ACTION,
    API_SIGNUP_FAILURE_ACTION,
    API_SIGNUP_SUCCESS_ACTION,
    CLEAN_AUTH_STATE
} from "../actions/types";

const INITIAL_STATE = {
    "emailActivateResponce": null,
    "errorEmailActivateAPI": null,
    "errorForgotPasswordAPI": null,
    "errorSetNewPasswordAPI": null,
    "errorSignAPI": null,
    "errorSignUpAPI": null,
    "forgotPasswordResponce": null,
    "setNewPasswordResponce": null,
    "signInResponce": null,
    "signUpResponce": null
};

/**
 * Auth Reducers -  Reducer related to Signup, Signin, Forgot, Activate email module 
 * @param {Any} state previous state
 * @param {Any} action action type
 * @returns {Any} new state
 */
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

    case API_SIGNIN_ACTION:
        return {
            ...state,
            "errorSignAPI": null,
            "loaderSignIn": true
        };
    case API_SIGNIN_SUCCESS_ACTION:
        return {
            ...state,
            "errorSignAPI": null,
            "loaderSignIn": false,
            "signInResponce": action.payload
        };
    case API_SIGNIN_FAILURE_ACTION:
        return {
            ...state,
            "errorSignAPI": action.payload,
            "loaderSignIn": false,
            "signInResponce": null
        };

    case API_SIGNUP_ACTION:
        return {
            ...state,
            "errorSignUpAPI": null,
            "loaderSignUp": true
        };
    case API_SIGNUP_SUCCESS_ACTION:
        return {
            ...state,
            "errorSignUpAPI": null,
            "loaderSignUp": false,
            "signUpResponce": action.payload
        };
    case API_SIGNUP_FAILURE_ACTION:
        return {
            ...state,
            "errorSignUpAPI": action.payload,
            "loaderSignUp": false,
            "signUpResponce": null
        };

    case API_FORGOT_PASSWORD_ACTION:
        return {
            ...state,
            "errorForgotPasswordAPI": null,
            "loaderForgot": true
        };
    case API_FORGOT_PASSWORD_SUCCESS_ACTION:
        return {
            ...state,
            "errorForgotPasswordAPI": null,
            "forgotPasswordResponce": action.payload,
            "loaderForgot": false
        };
    case API_FORGOT_PASSWORD_FAILURE_ACTION:
        return {
            ...state,
            "errorForgotPasswordAPI": action.payload,
            "forgotPasswordResponce": null,
            "loaderForgot": false
        };

    case API_EMAIL_ACTIVATE_ACTION:
        return {
            ...state,
            "errorEmailActivateAPI": null,
            "loaderEmailActivate": true
        };
    case API_EMAIL_ACTIVATE_SUCCESS_ACTION:
        return {
            ...state,
            "emailActivateResponce": action.payload,
            "errorEmailActivateAPI": null,
            "loaderEmailActivate": false
        };
    case API_EMAIL_ACTIVATE_FAILUE_ACTION:
        return {
            ...state,
            "emailActivateResponce": null,
            "errorEmailActivateAPI": action.payload,
            "loaderEmailActivate": false
        };

    case API_SET_NEW_PASSWORD_ACTION:
        return {
            ...state,
            "errorSetNewPasswordAPI": null,
            "loaderSetNewPasswordActivate": true
        };
    case API_SET_NEW_PASSWORD_SUCCESS_ACTION:
        return {
            ...state,
            "errorSetNewPasswordAPI": null,
            "loaderSetNewPasswordActivate": false,
            "setNewPasswordResponce": action.payload
        };
    case API_SET_NEW_PASSWORD_FAILURE_ACTION:
        return {
            ...state,
            "errorSetNewPasswordAPI": action.payload,
            "loaderSetNewPasswordActivate": false,
            "setNewPasswordResponce": null
        };

    case CLEAN_AUTH_STATE:
        return {
            ...state,
            "emailActivateResponce": null,
            "errorEmailActivateAPI": null,
            "errorForgotPasswordAPI": null,
            "errorSetNewPasswordAPI": null,
            "errorSignAPI": null,
            "errorSignUpAPI": null,
            "forgotPasswordResponce": null,
            "setNewPasswordResponce": null,
            "signInResponce": null,
            "signUpResponce": null
        };


    default:
        return state;

    }

};
