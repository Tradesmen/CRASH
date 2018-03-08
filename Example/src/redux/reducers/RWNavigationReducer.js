import {
    NAV_ACTIVATIONSCREEN,
    NAV_ADDNEWSECTIONSCREEN,
    NAV_ADDRESSSCREEN,
    NAV_ASSOCIATIONSCREEN,
    NAV_BACKGROUND_VERIFICATIOON,
    NAV_BOARDINGAPGES,
    NAV_C,
    NAV_CERTIFICATIONSCREEN,
    NAV_D,
    NAV_DASHBOARD,
    NAV_EDUCATIONSCREEN,
    NAV_EQUIPMENTSCREEN,
    NAV_F,
    NAV_FORGOTSCREEN,
    NAV_G,
    NAV_H,
    NAV_JOINTEAMSCREEN,
    NAV_LICENCESSCREEN,
    NAV_LOGINSCREEN,
    NAV_PROFILECONTAINER,
    NAV_PROJECTSSCREEN,
    NAV_SETPASSWORDSCREEN,
    NAV_SIGNUPSCREEN,
    NAV_SPECIALITYSCREEN,
    NAV_SPLASHSCREEN,
    NAV_TERMSOFSERVICE,
    NAV_TRADESSCREEN,
    NAV_UNIONSSCREEN,
    NAV_WORKINGEXPERIANCESCREEN
} from "../actions/types";

import {AppNavigator} from "../../navigators";
import {NavigationActions} from "react-navigation";

const splashAction = AppNavigator.router.getActionForPathAndParams("SplashScreen");
const initialNavState = AppNavigator.router.getStateForAction(splashAction,);
// Prevent screen called multitple times by quickly tap
const navigateOnce = (getStateForAction) => (action, state): ?Object => {

    const {type, routeName} = action;
    return state &&
        type === NavigationActions.NAVIGATE &&
        routeName === state.routes[state.routes.length - 1].routeName
        ? null
        : getStateForAction(action, state);

};

AppNavigator.router.getStateForAction = navigateOnce(AppNavigator.router.getStateForAction);

/**
 * @name NavigationReducer
 * @description reducer for app navigation.
 */
export default (state = initialNavState, action) => {


    let nextState;
    switch (action.type) {

    case NAV_SPLASHSCREEN:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({"routeName": "SplashScreen"}),
            state,

        );
        break;
    case NAV_BOARDINGAPGES:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({"routeName": "BoardingPages"}),
            state,

        );
        break;
    case NAV_LOGINSCREEN:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({"routeName": "LoginScreen"}),
            state,

        );
        break;
    case NAV_SIGNUPSCREEN:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({"routeName": "SignUpScreen"}),
            state,

        );
        break;
    case NAV_TERMSOFSERVICE:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({"routeName": "TermsOfServiceScreen"}),
            state,

        );
        break;
    case NAV_FORGOTSCREEN:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({"routeName": "ForgotPasswordScreen"}),
            state,

        );
        break;
    case NAV_SETPASSWORDSCREEN:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({"routeName": "SetPasswordScreen"}),
            state,
        );
        break;
    case NAV_JOINTEAMSCREEN:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({"routeName": "JoinTeamScreen"}),
            state,

        );
        break;
    case NAV_ACTIVATIONSCREEN:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({"routeName": "ActivationScreen"}),
            state,
        );
        break;

    case NAV_C:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({"routeName": "C"}),
            state,

        );
        break;

    case NAV_DASHBOARD:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({"routeName": "DrawerStackNavigator"}),
            state,

        );
        break;
    case NAV_PROFILECONTAINER:
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate(
            {"routeName": "ProfileScreen"       
        }),
        state,

    );
    break;
    case NAV_ADDNEWSECTIONSCREEN:
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "AddNewSectionScreen",
        "params": {
            "onGoBack": action.onGoBack
        }}),
        state,

    );
    break;
    case NAV_WORKINGEXPERIANCESCREEN: 
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "WorkingExperianceScreen"}),
        state,

    );
    break;
    case NAV_PROJECTSSCREEN: 
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "ProjectsScreen"}),
        state,

    );
    break;
    case NAV_EDUCATIONSCREEN: 
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "EducationScreen"}),
        state,

    );
    break;
    case NAV_LICENCESSCREEN: 
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "LicencesScreen"}),
        state,

    );
    break;
    case NAV_CERTIFICATIONSCREEN: 
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "CertificationScreen"}),
        state,

    );
    break;
    case NAV_UNIONSSCREEN: 
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "UnionsScreen"}),
        state,

    );
    break;
    case NAV_ASSOCIATIONSCREEN: 
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "AssociationsScreen"}),
        state,

    );
    break;
    case NAV_SPECIALITYSCREEN: 
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "SpecialityScreen"}),
        state,

    );
    break;
    case NAV_TRADESSCREEN: 
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "TradesScreen"}),
        state,

    );
    break;
    case NAV_EQUIPMENTSCREEN: 
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "EquipmentScreen"}),
        state,

    );
    break;
    case NAV_ADDRESSSCREEN: 
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "AddressContainer"}),
        state,

    );
    break;
    case NAV_BACKGROUND_VERIFICATIOON:
    nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({"routeName": "DemoBackgroundVerfication"}),
        state,

    );
    break;
    
    default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;

    }
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;

};


