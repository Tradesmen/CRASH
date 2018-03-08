import {AppColors, AppFontStyle, AppImages} from "../../../utils/GlobalStyle";
import {
    Dimensions,
    Image,
    Platform,
    StyleSheet,
    Text,
    View
} from "react-native";
import React, {Component} from "react";

import ExtraDimensions from "react-native-extra-dimensions-android";

/**
 * Styles - Styles for OnBoardingBaseContainer
 */
const {width, height} = Dimensions.get("window"),

    styles = StyleSheet.create({
        "backgroundImage": {
            "height": Platform.OS === "ios" ? height : ExtraDimensions.get("REAL_WINDOW_HEIGHT"),
            "position": "absolute",
            width
        },
        "icon": {
            "height": width / 1.75,
            "marginTop": -height * 0.2,
            "width": width / 1.75
        },
        "subViewContainer": {
            "alignItems": "center",
            "backgroundColor": AppColors.transparent,
            "flex": 1,
            "justifyContent": "center"
        },
        "container": {
            "backgroundColor": AppColors.appBackgroundBlackColor,
            "flex": 1
        },
        "title": {
            "color": AppColors.buttonEnabledBgColor,
            "fontFamily": AppFontStyle.HelviticaNeueBoldItalic,
            "fontSize": AppFontStyle.fontSize30,
            "fontWeight": AppFontStyle.bold,
            "textAlign": "center"
        },
        "description": {
            "color": AppColors.buttonEnabledBgColor,
            "fontFamily": AppFontStyle.HelviticaNeue,
            "fontSize": AppFontStyle.fontSize18,
            "fontWeight": AppFontStyle.regular,
            "marginTop": 25,
            "textAlign": "center"
        }
    });

/**
 * OnBoardingBaseContainer - The given class acts as base container of onBoarding introductory pages 
 */
export default class OnBoardingBaseContainer extends Component {

    /**
     * Render - returns UI of container
     * @returns {Any} View  _
     */
    render () {

        return (
            <View style={styles.container}>
                <Image
                    style={styles.backgroundImage}
                    resizeMode="cover"
                    source={AppImages.appBlackBackgroundGradient}
                />
                <View style={styles.subViewContainer}>
                    <Image
                        style={styles.icon}
                        resizeMode="cover"
                        source={this.props.boardingIcon}
                    />
                    <Text style={styles.title}>{this.props.titleText}</Text>
                    <Text style={StyleSheet.flatten([
                        styles.description,
                        {"width": width / this.props.descriptionWidth}
                    ])}>{this.props.titleDescriptioon}</Text>
                </View>
            </View>
        );

    }

}
