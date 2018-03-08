import {Image, StyleSheet, TouchableOpacity} from "react-native";
import React, {Component} from "react";

import {AppImages} from "../utils/GlobalStyle";

/**
 * @name MenuButton
 * @description style object for MenuButton.
 */
const styles = StyleSheet.create({
    "buttonStyle": {
        "alignItems": "flex-start",
        "height": 44,
        "justifyContent": "center",
        "width": 44
    },
    "iconStyle": {
        "height": 22,
        "marginLeft": 20,
        "width": 21.5
    }
});

/**
 * @name MenuButton
 * @description Hamburger button for dashboard.
 * @class MenuButton
 * @extends {Component}
 */
class MenuButton extends Component {

    render () {

        return (
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {

                this.props.navigation.navigate("DrawerToggle");

            }}>
                <Image style={styles.iconStyle} source={AppImages.drawerMenuIcon} />
            </TouchableOpacity>
        );

    }

}
export {MenuButton};
