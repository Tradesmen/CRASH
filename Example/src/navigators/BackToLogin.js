import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import React, {Component} from "react";

import {NavigationActions} from "react-navigation";

/**
 * @name styles
 * @description style object for BackToLogin
 */
const styles = StyleSheet.create({
    "buttonStyle": {
        "alignItems": "flex-start",
        "height": 44,
        "justifyContent": "center",
        "width": 50
    },
    "imageStyle": {
        "height": 20,
        "marginLeft": 20,
        "width": 10
    }
});

/**
 * @name BackToLogin
 * @description back button with reset stack functionality.
 * @class BackToLogin
 * @extends {Component}
 */
class BackToLogin extends Component {

    /**
     * @name render
     * @description (lifecycle method) renders UI of component.
     * @returns UI for back button with rest stack functionality.
     * @memberof BackToLogin
     */
    render () {

        return (
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {

                const resetAction =
                    NavigationActions.reset({
                        "actions": [
                            NavigationActions.navigate({
                                "routeName": "LoginScreen"
                            })
                        ],
                        "index": 0
                    });
                this.props.navigation.dispatch(resetAction);

            }}>
                {/* <Image style={styles.imageStyle} source={AppImages.backArrow} /> */}
                <Text> LOGIN </Text>
            </TouchableOpacity>
        );

    }

}

export {BackToLogin};

