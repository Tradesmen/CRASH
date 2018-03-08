import {
    ONBOARD_PAGE1_COMMUNICATE_DESCRIPTION,
    ONBOARD_PAGE1_COMMUNICATE_TITLE
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
 * PageA - Onboarding page 1 component 
 */
export default class PageA extends Component {

    /**
     * Render - returns UI of componenet
     * @returns {Any} View  _
     */
    render () {

        return (
            <View style={styles.container}>

                <OnBoardingBaseContainer
                    descriptionWidth = {2.5}
                    boardingIcon = {AppImages.onBoardingIcon1}
                    titleText = {ONBOARD_PAGE1_COMMUNICATE_TITLE}
                    titleDescriptioon = {ONBOARD_PAGE1_COMMUNICATE_DESCRIPTION} />
            </View>
        );

    }

}


