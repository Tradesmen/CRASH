import {
    ONBOARD_PAGE2_DIGITAL_PRESENCE_DESCRIPTION,
    ONBOARD_PAGE2_DIGITAL_PRESENCE_TITLE
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
 * PageB - Onboarding page 2 component 
 */
export default class PageB extends Component {

    /**
     * Render - returns UI of componenet
     * @returns {Any} View  _
     */
    render () {

        return (
            <View style={styles.container}>

                <OnBoardingBaseContainer
                    descriptionWidth = {2}
                    boardingIcon = {AppImages.onBoardingIcon2}
                    titleText = {ONBOARD_PAGE2_DIGITAL_PRESENCE_TITLE}
                    titleDescriptioon = {ONBOARD_PAGE2_DIGITAL_PRESENCE_DESCRIPTION} />
            </View>
        );

    }

}


