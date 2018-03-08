import {
    ONBOARD_PAGE3_DIGITAL_APPLY_FOR_JOBS_DESCRIPTION,
    ONBOARD_PAGE3_DIGITAL_APPLY_FOR_JOBS_TITLE
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
 * PageC - Onboarding page 3 component 
 */
export default class PageC extends Component {

    /**
     * Render - returns UI of componenet
     * @returns {Any} View  _
     */
    render () {

        return (
            <View style={styles.container}>

                <OnBoardingBaseContainer
                    descriptionWidth = {1.25}
                    boardingIcon = {AppImages.onBoardingIcon3}
                    titleText = {ONBOARD_PAGE3_DIGITAL_APPLY_FOR_JOBS_TITLE}
                    titleDescriptioon = {ONBOARD_PAGE3_DIGITAL_APPLY_FOR_JOBS_DESCRIPTION} />
            </View>
        );

    }

}


