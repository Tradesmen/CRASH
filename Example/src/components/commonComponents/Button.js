import {AppColors, AppFontStyle} from "../../utils/GlobalStyle";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import PropTypes from "prop-types";
import React from "React";

const styles = StyleSheet.create({
    "button": {"justifyContent": "center"},
    "verticalMargin": {"marginVertical": 10},
    "buttonView": {
        "justifyContent": "center",
        "alignItems": "center",
        "flexDirection": "row"
    },
    "iconLeftView": {"marginRight": 20},
    "buttonTitleText": {
        "fontWeight": AppFontStyle.bold,
        "fontFamily": AppFontStyle.HelviticaNeue
    },
    "iconRightView": {"marginLeft": 10}
});

/**
 * Button Component 
 */
export default class Button extends React.Component {

    /**
     * PropTypes - component props
     */
    static propTypes = {
        "backgroundColor": PropTypes.string,
        "disabled": PropTypes.bool,
        "height": PropTypes.number,
        "isMargin": PropTypes.bool,
        "leftIcon": PropTypes.any,
        "leftIconDimensions": PropTypes.number,
        "onPress": PropTypes.func,
        "rightIcon": PropTypes.any,
        "rightIconDimensions": PropTypes.number,
        "title": PropTypes.string,
        "titleColor": PropTypes.string,
        "titleSize": PropTypes.number
    };

    static defaultProps = {
        "backgroundColor": AppColors.buttonEnabledBgColor,
        "disabled": false,
        "height": 50,
        "isMargin": 0,
        "leftIcon": null,
        "leftIconDimensions": 20,
        "onPress": () => {},
        "rightIcon": null,
        "rightIconDimensions": 20,
        "title": "",
        "titleColor": AppColors.buttonTitleColor,
        "titleSize": AppFontStyle.fontSize15

    };

    /**
     * Render - returns UI of componenet
     * @returns {Any} View  _
     */
    render () {

        return (
            <TouchableOpacity
                disabled={this.props.disabled}
                style={[
                    styles.button,
                    {
                        "backgroundColor": this.props.backgroundColor,
                        "height": this.props.height,
                        "marginVertical": this.props.isMargin ? this.props.marginVertical : 0
                    }
                ]}
                onPress={() => this.props.onPress()}
            >

                <View style={[
                    styles.buttonView,
                    {"width": this.props.width}
                ]}
                >
                    <View style={[
                        styles.iconLeftView,
                        {
                            "height": this.props.leftIconDimensions,
                            "width": this.props.leftIconDimensions
                        }
                    ]}>
                        {this.props.leftIcon
                            ? <Image resizeMode={"stretch"} source={this.props.leftIcon} style={{
                                "height": this.props.leftIconDimensions,
                                "width": this.props.leftIconDimensions
                            }} />
                            : null}
                    </View>

                    <Text style={[
                        styles.buttonTitleText,
                        {
                            "color": this.props.titleColor,
                            "fontSize": this.props.titleSize,
                            "fontWeight": this.props.fontWeight
                        }
                    ]} >
                        {this.props.title}
                    </Text>

                    <View style={[
                        styles.iconRightView,
                        {
                            "height": this.props.rightIconDimensions,
                            "width": this.props.rightIconDimensions
                        }
                    ]}>
                        {this.props.rightIcon
                            ? <Image resizeMode={"stretch"} source={this.props.rightIcon} style={{
                                "height": this.props.rightIconDimensions,
                                "width": this.props.rightIconDimensions
                            }} />
                            : null}
                    </View>
                </View>
            </TouchableOpacity>
        );

    }

}
