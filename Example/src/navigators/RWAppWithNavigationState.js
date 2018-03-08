import {Alert, BackHandler, View} from "react-native";
import {NavigationActions, addNavigationHelpers} from "react-navigation";

import {
    AppNavigator
} from "./RWAppStackNavigator";
import PropTypes from "prop-types";
import React from "react";
import {connect} from "react-redux";

/**
 * @name AppWithNavigationState
 * @description component for app navigator.
 * @export AppWithNavigationState
 * @class AppWithNavigationState
 * @extends {React.Component}
 */
export class AppWithNavigationState extends React.Component {

    /**
     * @name render
     * @description (lifecycle method) renders UI of component.
     * @returns UI for component
     * @memberof AppWithNavigationState
     */
    render () {

        return (
            <View style={{"flex": 1}}>
                <AppNavigator navigation={addNavigationHelpers({
                    "dispatch": this.props.dispatch,
                    "state": this.props.nav
                })} />
            </View>
        );

    }

}

AppWithNavigationState.propTypes = {
    "dispatch": PropTypes.func.isRequired,
    "nav": PropTypes.object.isRequired
};

/**
 * @name mapStateToProps
 * @description converts redux state to props of component.
 * @param {Object} state 
 */
const mapStateToProps = (state) => ({"nav": state.nav});

/**
 * @name connect
 * @description connects component to redux store.
 */
export default connect(mapStateToProps)(AppWithNavigationState);
