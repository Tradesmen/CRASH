import {
    ERROR_TIMEOUT,
    MAP_ADDRESS_URL,
    MAP_API_KEY,
    MAP_KEY_PARAM,
    SOMETHING_WENT_WRONG
} from "../utils/NetConstant";
import {
    GET_USER_CURRENT_ADDRESS,
    USER_CURRENT_ADDRESS_FAILURE,
    USER_CURRENT_ADDRESS_SUCCESS
} from "../redux/actions/types";
import {TIMEOUT_API_30_SEC, ZERO} from "../utils/AppConstant";
import {call, put, takeLatest} from "redux-saga/effects";

import {helper} from "../utils/AppUtility";

const getAddress = (myLat, myLon) => {

    // Strike Api
    return helper.timeoutPromise(TIMEOUT_API_30_SEC, new Error(ERROR_TIMEOUT), fetch(MAP_ADDRESS_URL + myLat + ',' + myLon + MAP_KEY_PARAM + MAP_API_KEY, {
        "method": "GET",
        "timeout": TIMEOUT_API_30_SEC,
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((response) => response.text()).
        then((responseText) => {

            try {

                const result = JSON.parse(responseText);
                if (result) {

                    return result;

                }

                return null;

            } catch (e) {

                return null;

            }

        }).
        catch(() => null)).catch(() => null);

};

function *getCurrentAddress (action) {

    const response = yield call(getAddress, action.lat, action.long);

    if (response) {

        if (response.results.length) {
            yield put({
                "type": USER_CURRENT_ADDRESS_SUCCESS,
                "payload": response.results[ZERO].formatted_address
            });

        } else{
            yield put({
                "type": USER_CURRENT_ADDRESS_FAILURE,
                "payload": SOMETHING_WENT_WRONG
            });
        }

    } else {

        yield put({
            "type": USER_CURRENT_ADDRESS_FAILURE,
            "payload": ERROR_TIMEOUT
        });

    }

}

function *MapSaga () {

    yield takeLatest(GET_USER_CURRENT_ADDRESS, getCurrentAddress);

}

/**
 * ActivateEmailSaga -  Activate email Api Call  
 */
export default MapSaga;

