import {
    API_EMAIL_ACTIVATE_ACTION,
    API_FORGOT_PASSWORD_ACTION,
    API_SET_NEW_PASSWORD_ACTION,
    API_SIGNIN_ACTION,
    API_SIGNUP_ACTION,
    CLEAN_AUTH_STATE
} from "./types";

/**
 * Auth Actions -  Actions related to Signup, Signin, Forgot, Activate email module 
 */
export const loginUserAction = ({uname, password}) => ({
    "email": uname,
    "type": API_SIGNIN_ACTION,
    password
});

export const signUpUserAction = ({userObj}) => ({
    userObj,
    "type": API_SIGNUP_ACTION
});

export const activateEmailAction = ({activateCode}) => ({
    activateCode,
    "type": API_EMAIL_ACTIVATE_ACTION
});

export const forgotPasswordAction = ({email}) => ({
    email,
    "type": API_FORGOT_PASSWORD_ACTION
});

export const setNewPasswordAction = ({token, newPassword}) => ({
    token,
    newPassword,
    "type": API_SET_NEW_PASSWORD_ACTION
});

export const cleanAuthStateAction = () => ({"type": CLEAN_AUTH_STATE});


