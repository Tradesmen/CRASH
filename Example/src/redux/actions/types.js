/**
 * Navigation Action types 
 */
export const NAV_ACTIVATIONSCREEN = "ActivationScreen",
    NAV_BOARDINGAPGES = "BoardingPagesNavigation",
    NAV_FORGOTSCREEN = "ForgotPasswordNavigation",
    NAV_JOINTEAMSCREEN = "JoinTeamScreenNavigation",
    NAV_LOGINSCREEN = "LoginScreenNavigation",
    NAV_SETPASSWORDSCREEN = "SetPasswordScreen",
    NAV_SIGNUPSCREEN = "SignUpScreenNavigation",
    NAV_SPLASHSCREEN = "SpashScreenNavigation",
    NAV_TERMSOFSERVICE = "TermsOfServiceNavigation",
    NAV_PROFILECONTAINER = "ProfileContainer",
    NAV_ADDNEWSECTIONSCREEN = "AddNewSectionScreen",
    NAV_WORKINGEXPERIANCESCREEN = "WorkingExperianceScreen",
    NAV_PROJECTSSCREEN = "ProjectsScreen",
    NAV_EDUCATIONSCREEN = "EducationScreen",
    NAV_LICENCESSCREEN = "LicencesScreen",
    NAV_CERTIFICATIONSCREEN = "CertificationScreen",
    NAV_UNIONSSCREEN = "UnionsScreen",
    NAV_ASSOCIATIONSCREEN = "AssociationsScreen",
    NAV_SPECIALITYSCREEN = "SpecialityScreen",
    NAV_TRADESSCREEN = "TradesScreen",
    NAV_EQUIPMENTSCREEN = "EquipmentScreen",
    NAV_ADDRESSSCREEN = "AddressScreen",
    NAV_BACKGROUND_VERIFICATIOON = "BacgroundVerificationScreen1";

export const NAV_DASHBOARD = "DashboardNavigation";

/**
 * Auth Action types 
 */
export const API_EMAIL_ACTIVATE_FAILUE_ACTION = "EmailActivateApiRequestFailure",
    API_EMAIL_ACTIVATE_SUCCESS_ACTION = "EmailActivateApiRequestSuccess",
    API_FORGOT_PASSWORD_ACTION = "ForgotPasswordApiRequest",
    API_FORGOT_PASSWORD_FAILURE_ACTION = "ForgotPasswordApiRequestFailure",
    API_FORGOT_PASSWORD_SUCCESS_ACTION = "ForgotPasswordApiRequestSuccess",
    API_SET_NEW_PASSWORD_ACTION = "ResetNewPassword",
    API_SET_NEW_PASSWORD_FAILURE_ACTION = "ResetNewPasswordFailure",
    API_SET_NEW_PASSWORD_SUCCESS_ACTION = "ResetNewPasswordSuccess",
    API_SIGNIN_ACTION = "SignInApiRequest",
    API_SIGNIN_FAILURE_ACTION = "SignInApiRequestFailure",
    API_SIGNIN_SUCCESS_ACTION = "SignInApiRequestSuccess",
    API_SIGNUP_ACTION = "SignUpApiRequest",
    API_SIGNUP_FAILURE_ACTION = "SignUpApiRequestFailure",
    API_SIGNUP_SUCCESS_ACTION = "SignUpApiRequestSuccess",
    API_EMAIL_ACTIVATE_ACTION = "EmailActivateApiRequest",
    CLEAN_AUTH_STATE = "cleanAuthState";

/**
 * Maps Actions.
 */
export const GET_USER_CURRENT_ADDRESS = "GetUserCurrentAddress",
    USER_CURRENT_ADDRESS_SUCCESS = "UserCurrentAddressSuccess",
    USER_CURRENT_ADDRESS_FAILURE = "UserCurrentAddressFailure";
    

/**
 * User Profile Actions.
 */
export const API_SET_PROFILE_PIC_ACTION = "SetApiProfilePicRequest",
API_SET_PROFILE_PIC_SUCCESS = "SetApiProfilePicRequestSuccess",
API_SET_PROFILE_PIC_FAILURE = "SetApiProfilePicRequestFailure",
API_GET_USER_DETAILS = "getUserDetailsRequest",
API_GET_USER_DETAILS_SUCCESS = "getUserDetailsSuccess",
API_GET_USER_DETAILS_FAILURE = "getUserDetailsFailure",
API_SET_USER_DETAILS = "setUserDetailsRequest",
API_SET_USER_DETAILS_SUCCESS = "setUserDetailsSuccess",
API_SET_USER_DETAILS_FAILURE = "setUserDetailsFailure",
API_SET_USER_DETAILS_CLEAN = "setUserDetailsClean",
API_DELETE_USER_DETAILS = "deleteUserDetails",
API_DELETE_USER_DETAILS_SUCCESS = "deleteUserDetailsSuccess",
API_DELETE_USER_DETAILS_FAILURE = "deleteUserDetailsFailure",
API_SET_USER_INFO = "setUserInfoRequest",
API_SET_USER_INFO_SUCCESS = "setUserInfoSuccess",
API_SET_USER_INFO_FAILURE = "setUserInfoFailure";
