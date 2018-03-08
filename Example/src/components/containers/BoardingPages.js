import {AppColors, AppFontStyle, AppImages} from "../../utils/GlobalStyle";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import React, {Component} from "react";

import {NAV_LOGINSCREEN} from "../../redux/actions/types";
import {PAGINATION_TIME_INTERVAL} from "../../utils/AppConstant";
import PageA from "../commonComponents/introPages/PageA";
import PageB from "../commonComponents/introPages/PageB";
import PageC from "../commonComponents/introPages/PageC";
import PageD from "../commonComponents/introPages/PageD";
import {Pages} from "react-native-pages";

const styles = StyleSheet.create({
    "container": {
        "backgroundColor": AppColors.appBackgroundBlackColor,
        "flex": 1
    },
    "pagesContainer": {"flex": 0.91},
    "joinNowContainer": {
        "backgroundColor": AppColors.appDarkBlueJoinNowBackgroundColor,
        "flex": 0.09
    },
    "joinNowButton": {
        "alignItems": "center",
        "backgroundColor": AppColors.appDarkBlueJoinNowBackgroundColor,
        "flex": 1,
        "flexDirection": "row",
        "justifyContent": "center",
        "justifyContent": "center"
    },
    "joinNowButtonText": {
        "color": AppColors.buttonEnabledBgColor,
        "fontFamily": AppFontStyle.HelviticaNeue,
        "fontSize": AppFontStyle.fontSize15,
        "fontWeight": AppFontStyle.regular,
        "textAlign": "center"
    },
    "rightArrow": {
        "alignSelf": "center",
        "height": 10,
        "marginLeft": 5,
        "width": 5
    }
});

export default class BoardingPages extends Component {

    constructor (props) {

        super(props);

        this.pagesRef = this.pagesRef.bind(this);
        this.timeInterval = PAGINATION_TIME_INTERVAL;

    }

    componentDidMount () {

        this.autoPagination();

    }

    pagesRef (ref) {

        this._pages = ref;

    }

    autoPagination () {

        setTimeout(() => {

            if (this._pages) {

                this._pages.scrollToPage(1);

            }

        }, this.timeInterval);

        setTimeout(() => {

            if (this._pages) {

                this._pages.scrollToPage(2);

            }

        }, this.timeInterval * 2);

        setTimeout(() => {

            if (this._pages) {

                this._pages.scrollToPage(3);

            }

        }, this.timeInterval * 3);

    }

    onJoinNowClick () {

        // this.props.navigation.dispatch({"type": NAV_LOGINSCREEN});

    }

    /**
     * Render - returns UI of componenet
     * @returns {Any} View  _
     */
    render () {

        return (
            <View style = {styles.container}>

                <Pages style = {styles.pagesContainer} ref={this.pagesRef}>
                    <PageA />
                    <PageB />
                    <PageC />
                    <PageD />
                </Pages>

                <View style = {styles.joinNowContainer}>
                    <TouchableOpacity style = {styles.joinNowButton} onPress={() => this.onJoinNowClick()}>
                        <Text style = {styles.joinNowButtonText}>JOIN NOW</Text>
                        <Image style={styles.rightArrow} source={AppImages.rightArrowWhite} height={12} width={14}/>
                    </TouchableOpacity>
                </View>

            </View>
        );

    }

}

