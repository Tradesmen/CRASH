import {
    StyleSheet,
    View
} from "react-native";

import BoardingPages from "../components/containers/BoardingPages";
import React from "react";
import SplashScreen from "../components/containers/SplashScreen";
import {StackNavigator} from "react-navigation";

/**
 * @name styles
 * @description style object for Navigator.js
 * @exports styles
 */
 const styles = StyleSheet.create({
    "navigationBar": {
        "backgroundColor": "rgb(10,132,192)",
        "marginTop": 0
    },
    "navigationBarTransparent": {"backgroundColor": "green"},
    "titleStyle": {
        "alignSelf": "center",
        "color": "white",
        "fontSize": 15,
        "fontWeight": "bold",
        "textAlign": "center"
    },
    "titleTwoFoactorStyle": {
        "alignSelf": "flex-end",
        "color": "white",
        "fontSize": 15,
        "fontWeight": "bold",
        "paddingRight": 5,
        "textAlign": "right"
    },
    "titleTwoFoactorStyleTransparent": {
        "color": "transparent",
        "fontSize": 15,
        "fontWeight": "bold"
    },
    "dummyTitleStyle":
     {"color": "black"}
});

/**
 * @name AppNavigator
 * @description Navigation for screens using stack navigator.
 */
export const AppNavigator = StackNavigator( 
    {

        "SplashScreen": {
            "screen": SplashScreen,
            "navigationOptions": {"header": false}
        },
        "BoardingPages": {
            "screen": BoardingPages,
            "navigationOptions": {
                "gesturesEnabled": false,
                "header": false
            }
        

        
    }
}
    // {"transitionConfig": getSlideFromRightTransition}
);
