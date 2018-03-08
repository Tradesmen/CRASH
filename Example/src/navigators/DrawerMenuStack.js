import {DrawerNavigator, StackNavigator, TabNavigator} from "react-navigation";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import React, {Component} from "react";

import {Dimensions} from "react-native";
import DrawerMenuContainer
    from "./../components/containers/drawerMenuContainer/DrawerMenuContainer";
import {
    MenuButton
} from "./MenuButton.js";

const styles = StyleSheet.create({
    "navigationBar": {
        "backgroundColor": "rgb(10,132,192)",
        "marginTop": 0 
    },
    "navigationBarTransparent": {"backgroundColor": "green"},
    "titleStyle": {
        "alignSelf": "center",
        "color": "white",
        "fontSize": 15,
        "fontWeight": "bold",
        "textAlign": "center"
    },
    "titleTwoFoactorStyle": {
        "alignSelf": "flex-end",
        "color": "white",
        "fontSize": 15,
        "fontWeight": "bold",
        "paddingRight": 5,
        "textAlign": "right"
    },
    "titleTwoFoactorStyleTransparent": {
        "color": "transparent",
        "fontSize": 15,
        "fontWeight": "bold"
    },
    "dummyTitleStyle":
     {"color": "black"}
});
// const TabNav = TabNavigator({
//     I: { screen: I },
//     J: { screen: J },
// },
// {
//     tabBarPosition: 'bottom',
// }
// );

const DrawerMenuStack = StackNavigator({
    
    // TabNav: { screen: TabNav },

});

/**
 * @name DrawerMenu
 * @description Application drawer/left side menu.
 */
 const DrawerMenu = DrawerNavigator({
    "MenuStack": {"screen": DrawerMenuStack}}, {
    "contentComponent": DrawerMenuContainer,
    "contentOptions": {"activeTintColor": "blue"},
    "drawerBackgroundColor": "yellow",
    "drawerWidth": Dimensions.get("window").width * 0.84,
    "gesturesEnabled": false,
    "initialRouteName": "MenuStack"
});




export const DrawerStackNavigator = StackNavigator(
    {
        "DrawerMenu": {
            "navigationOptions": {
                "gesturesEnabled": false,
                "headerBackTitleStyle": styles.dummyTitleStyle,
                "headerStyle": styles.navigationBar,
                "headerTintColor": "white",
                "title": "      "

            },
            "screen": DrawerMenu
        }
    },
    {"headerMode": "none"}
);

