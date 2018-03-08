import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";

import React from "react";

/**
 * @name styles
 * @description style object for BackButton. 
 */
const styles = StyleSheet.create({
    "BackButtonStyle": {
        "alignItems": "flex-start",
        "height": 44,
        "justifyContent": "center",
        "width": 50
    },
    "backArrowImage": {
        "height": 20,
        "marginLeft": 20,
        "width": 10
    }
   });

/**
 * @name BackButton
 * @description UI for backbutton.
 * @class BackButton
 * @extends {Component}
 */
class BackButton extends React.Component {

    /**
     * @name render
     * @description (lifecycle method) renders UI of component. 
     * @returns UI for back button.
     * @memberof BackButton
     */
    render () {

        return (
            <TouchableOpacity style={styles.BackButtonStyle} onPress={() => {

                this.props.navigation.goBack();

            }}>
                {/* <Image style={styles.backArrowImage} source={AppImages.backArrow} /> */}

                <Text> BACK </Text>
            </TouchableOpacity>
        );

    }

}

export {BackButton};
