import {
    API_GET_USER_DETAILS,
    API_GET_USER_DETAILS_FAILURE,
    API_GET_USER_DETAILS_SUCCESS
} from "../redux/actions/types";
import {
    BASE_URL,
    ERROR_TIMEOUT,
    USER_DETAILS_URL
} from "../utils/NetConstant";
import {TIMEOUT_API_30_SEC, ZERO} from "../utils/AppConstant";
import {call, put, takeLatest} from "redux-saga/effects";

import {helper} from "../utils/AppUtility";

const getUserProfileApiCall = () => {

    // Strike Api
    return helper.timeoutPromise(TIMEOUT_API_30_SEC, new Error(ERROR_TIMEOUT), fetch(BASE_URL + USER_DETAILS_URL, {
        "method": "GET",
        "timeout": TIMEOUT_API_30_SEC,
        "headers": {
            "Accept": "application/json",
            "Auth-Token": helper.getApiToken(),
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

function *getUserProfile () {

    const response = yield call(getUserProfileApiCall);

    if (response) {

        if (response.errors && response.errors.length > ZERO) {

            yield put({
                "type": API_GET_USER_DETAILS_FAILURE,
                "payload": response.errors[0]
            });

        } else {

            yield put({
                "type": API_GET_USER_DETAILS_SUCCESS,
                "payload": response
            });

        }

    } else {

        yield put({
            "type": API_GET_USER_DETAILS_FAILURE,
            "payload": ERROR_TIMEOUT
        });

    }

}

function *UserDetailsSaga () {

    yield takeLatest(API_GET_USER_DETAILS, getUserProfile);

}

/**
 * SignUpSaga -  Sign in Api Call  
 */
export default UserDetailsSaga;
