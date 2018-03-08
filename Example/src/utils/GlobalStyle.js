import ReactNative, {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get("window");

const APP_ICON = require("../../assets/images/RWAppIcon.png");
const BACKGROUND_BLACK_GRADIENT = require("../../assets/images/RWBlackGradient.png");
const BACKGROUND_BLUE_GRADIENT = require("../../assets/images/RWBlueGradient.png");
const FACEBOOK_ICON = require("../../assets/images/RWFacebookLogo.png");
const GOOGLE_PLUST_ICON = require("../../assets/images/RWGooglePlusLogo.png");
const LINKEDIN_ICON = require("../../assets/images/RWLinkedInLogo.png");
const LOCK_ICON = require("../../assets/images/RWLocked.png");
const ONBOARDING_ICON1 = require("../../assets/images/RWOnBoarding1Icon.png");
const ONBOARDING_ICON2 = require("../../assets/images/RWOnBoarding2Icon.png");
const ONBOARDING_ICON3 = require("../../assets/images/RWOnBoarding3Icon.png");
const ONBOARDING_ICON4 = require("../../assets/images/RWOnBoarding4Icon.png");
const RIGHT_ARROW_WHITE = require("../../assets/images/RWRightArrow.png");
const SPLASH_SCREEN = require("../../assets/images/RWSplashScreen.png");
const USER_ICON = require("../../assets/images/RWUserIcon.png");
const CLOSE_ICON = require("../../assets/images/RWCloseIcon.png");
const DEMODASHBOARD = require("../../assets/images/RWDemoDashboard.png");
const DRAWER_MENU_ICON = require("../../assets/images/RWDrawerMenuButtonWhite.png");
const EDIT_ICON = require("../../assets/images/RWPencil.png");
const RIGHT_TICK_ICON = require("../../assets/images/rightTick.png");
const RIGHT_ARROW_ANGLE_ICON = require("../../assets/images/RWrightArrowAngle.png");
const MENU_ICON = require("../../assets/images/RWMenu.png");
const LIKE_ICON = require("../../assets/images/RWLikeIcon.png");
const SAVE_ICON = require("../../assets/images/RWSaveIcon.png");
const MINUS_ICON = require("../../assets/images/RWMinus.png");
const PLUS_ICON  = require("../../assets/images/RWPlus.png");
const STAR_ICON = require("../../assets/images/RWStarIcon.png");
const CROSS_CIRCLE_ICON = require("../../assets/images/RWCrossCircle.png");
const PIN_ICON = require("../../assets/images/RWPin.png");
const SEARCH_ICON = require("../../assets/images/RWSearch.png");
const DEFAULT_USER_ICON = require("../../assets/images/RWDefaultUserIcon.png");
const DEMO_BACKGROUND_VERIFICATION = require("../../assets/images/demoBackgroundVerification.png");


export const AppFontStyle = {
        "HelviticaNeue": "HelveticaNeue",
        "HelviticaNeueBoldItalic": "HelveticaNeue-BoldItalic",
        "bold": "700",
        "fontSize11": 11,
        "fontSize12": 12,
        "fontSize14": 14,
        "fontSize15": 15,
        "fontSize16": 16,
        "fontSize17": 17,
        "fontSize18": 18,
        "fontSize22": 22,
        "fontSize30": 30,
        "medium": "500",
        "regular": "400",
        "semiBold": "600"
    },

    AppColors = {
        "appBackgroundBlueColor": "rgb(56, 163, 218 )",
        "appBackgroundBlackColor": "rgb(51, 51, 51 )",
        "appBackgroundWhiteColor": "#fff",
        "appDarkBlueJoinNowBackgroundColor": "rgb(0, 117, 179 )",
        "buttonDisabledBgColor": "#B1C9D6",
        "buttonDisabledTitleColor": "#fff",
        "buttonEnabledBgColor": "#fff",
        "buttonTitleColor": "#000",
        "loaderPrimaryColor": "#fff",
        "loaderOverlayColor": "rgba(0, 0, 0, 0.5)",
        "placeholderColor": "#f5f5f5",
        "termsContainerbgColor": "#262628",
        "titleColor": "#fff",
        "transparent": "transparent",
        "linkedInBtnBgColor": "#1f79b3",
        "facebookBtnBgColor": "#3b5b96",
        "termOfServiceBtnBgColor": "#1e75b6",
        "profileScreenTextColor": "#1d74b6",
        "borderColorProfileComponent": "#ddd",
        "boxShadowColor": "#000",
        "likeRecentPostBgCOlor": "#f4f4f4",
        "gray": "gray",
        "profileScreenBgCellTextColor": "#a5a5a6",
        "datePickerBorderColor": "#3d88c1",
        "profileSubScreensBgColor": "#ffffff",
        "confirmBtnBgColor": "#3d88c1"
    },

    AppImages = {
        "appBlackBackgroundGradient": BACKGROUND_BLACK_GRADIENT,
        "appBlueBackgroundGradient": BACKGROUND_BLUE_GRADIENT,
        "appIcon": APP_ICON,
        "closeIcon": CLOSE_ICON,
        "facebookIcon": FACEBOOK_ICON,
        "googlePlusIcon": GOOGLE_PLUST_ICON,
        "linkedIcon": LINKEDIN_ICON,
        "lockIcon": LOCK_ICON,
        "onBoardingIcon1": ONBOARDING_ICON1,
        "onBoardingIcon2": ONBOARDING_ICON2,
        "onBoardingIcon3": ONBOARDING_ICON3,
        "onBoardingIcon4": ONBOARDING_ICON4,
        "rightArrowWhite": RIGHT_ARROW_WHITE,
        "splashSCreen": SPLASH_SCREEN,
        "userIcon": USER_ICON,
        "demoDashboard": DEMODASHBOARD,
        "drawerMenuIcon": DRAWER_MENU_ICON,
        "editIcon": EDIT_ICON,
        "rightTickIcon": RIGHT_TICK_ICON,
        "rightArrowAngle": RIGHT_ARROW_ANGLE_ICON,
        "menuIcon": MENU_ICON,
        "likeIcon": LIKE_ICON,
        "saveIcon": SAVE_ICON,
        "minusIcon": MINUS_ICON,
        "plusIcon": PLUS_ICON,
        "starIcon": STAR_ICON,
        "crossCircleIcon": CROSS_CIRCLE_ICON,
        "pinIcon": PIN_ICON,
        "searchIcon": SEARCH_ICON,
        "defaultUserIcon": DEFAULT_USER_ICON,
        "demoBackgroundVerification": DEMO_BACKGROUND_VERIFICATION
    },

    globalStyles = StyleSheet.create({
        "backgroundImage": {
            height,
            width,
            "position": "absolute"
        }
    });
