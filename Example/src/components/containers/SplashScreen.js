import {AppColors, AppImages} from "../../utils/GlobalStyle";
import {
    Dimensions,
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    View
} from "react-native";
import React, {Component} from "react";

import ExtraDimensions from "react-native-extra-dimensions-android";
import {NAV_BOARDINGAPGES,} from "../../redux/actions/types";
import {SPLASHSCREEN_DELAY} from "../../utils/AppConstant";

/**
 * styles - style for SplashScreen
 */
const styles = StyleSheet.create({
    "backgroundImage": {
        "height": Platform.OS === "ios" ? Dimensions.get("window").height : ExtraDimensions.get("REAL_WINDOW_HEIGHT"),
        "width": Dimensions.get("window").width
    },
    "container": {"backgroundColor": AppColors.appBackgroundBlackColor}
});

Platform.select({
    "ios": () => StatusBar.setBarStyle("light-content"),
    "android": () => StatusBar.setBackgroundColor("#263238")
})();
/**
 * SplashScreen component.
 */
export default class SplashScreen extends Component {

    /**
     * navigateToIntroPages - navigates to intropages.
     */
    navigateToIntroPages () {

        this.props.navigation.dispatch({"type": NAV_BOARDINGAPGES});

    }
    /**
     * componentDidMount - component lifecycle
     * @return {Void}
     */
    componentDidMount () {

        setTimeout(() => {

            this.navigateToIntroPages();

        }, SPLASHSCREEN_DELAY);

    }

    /**
     * Render - returns UI of componenet
     * @returns {Any} View  _
     */
    render () {

        return (
            <View style={styles.container} >
                <StatusBar barStyle="light-content" />
                <Image
                    style={styles.backgroundImage}
                    resizeMode="cover"
                    source={AppImages.splashSCreen}
                />
            </View>
        );

    }

}

