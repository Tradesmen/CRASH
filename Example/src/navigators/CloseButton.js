import {Image, StyleSheet, TouchableOpacity} from "react-native";
import React, {Component} from "react";

import {AppImages} from "../utils/GlobalStyle";

const styles = StyleSheet.create({
    "buttonStyle": {
        "alignItems": "flex-start",
        "height": 44,
        "justifyContent": "center",
        "width": 50
    },
    "iconStyle": {
        "height": 20,
        "marginLeft": 20,
        "width": 20
    }
});

class CloseButton extends Component {

    render () {

        return (
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {

                this.props.navigation.goBack();

            }}>
                <Image style={styles.iconStyle} source={AppImages.closeIcon} />
            </TouchableOpacity>
        );

    }

}
export {CloseButton};
