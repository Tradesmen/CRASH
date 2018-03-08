import {
    ONBOARD_PAGE4_DIGITAL_GET_WORK_DESCRIPTION,
    ONBOARD_PAGE4_DIGITAL_GET_WORK_TITLE
} from "../../../utils/UserMessagesConstant";
import React, {Component} from "react";
import {
    StyleSheet,
    View
} from "react-native";

import {AppImages} from "../../../utils/GlobalStyle";
import OnBoardingBaseContainer from "./OnBoardingBaseContainer";

const styles = StyleSheet.create({"container": {"flex": 1}});

/**
 * PageD - Onboarding page 4 component 
 */
export default class PageD extends Component {

    /**
     * Render - returns UI of componenet
     * @returns {Any} View  _
     */
    render () {

        return (
            <View style={styles.container}>

                <OnBoardingBaseContainer
                    descriptionWidth = {1.25}
                    boardingIcon = {AppImages.onBoardingIcon4}
                    titleText = {ONBOARD_PAGE4_DIGITAL_GET_WORK_TITLE}
                    titleDescriptioon = {ONBOARD_PAGE4_DIGITAL_GET_WORK_DESCRIPTION} />
            </View>
        );

    }

}


