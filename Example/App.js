/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
    Platform,
    StyleSheet,
    Text,
    View
} from "react-native";
import React, {Component} from "react";
import {applyMiddleware, createStore} from "redux";
import {autoRehydrate, persistStore} from "redux-persist";

import AppWithNavigationState from "./src/navigators/RWAppWithNavigationState";
import {AsyncStorage} from "react-native";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./src/redux/reducers";
import rootSaga from "./src/sagas";

const instructions = Platform.select({
        "android": "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
        "ios": "Press Cmd+R to reload,\n" +
    "Cmd+D or shake for dev menu"
    }),
    styles = StyleSheet.create({
        "container": {
            "flex": 1,
            "justifyContent": "center",
            "alignItems": "center",
            "backgroundColor": "#F5FCFF"
        },
        "welcome": {
            "fontSize": 20,
            "textAlign": "center",
            "margin": 10
        },
        "instructions": {
            "textAlign": "center",
            "color": "#333333",
            "marginBottom": 5
        }
    });
export default class App extends Component {

    render () {

       
        // const store = createStore(
        //     reducers,
        //     autoRehydrate()

        // );
        // // persistStore(store, {
        // //     "storage": AsyncStorage,
        // //     "whitelist": ["fingerScanReducer"]
        // // });

        // return (
        //     <Provider store={store}>
        //         <AppWithNavigationState />
        //     </Provider>
        // );


        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(
            reducers, applyMiddleware(sagaMiddleware),
            autoRehydrate()

        );
        persistStore(store, {
            "storage": AsyncStorage,
            "whitelist": ["fingerScanReducer"]
        });

        sagaMiddleware.run(rootSaga);

        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );

    }

}


