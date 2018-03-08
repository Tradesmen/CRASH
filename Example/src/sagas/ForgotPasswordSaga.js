import {
    API_FORGOT_PASSWORD_ACTION,
    API_FORGOT_PASSWORD_FAILURE_ACTION,
    API_FORGOT_PASSWORD_SUCCESS_ACTION
} from "../redux/actions/types";
import {
    BASE_URL,
    ERROR_INCOMPLETE_DATA,
    ERROR_TIMEOUT,
    RESET_PASSWORD_URL
} from "../utils/NetConstant";
import {TIMEOUT_API_30_SEC, ZERO} from "../utils/AppConstant";
import {call, put, takeLatest} from "redux-saga/effects";

import {helper} from "../utils/AppUtility";

const setNewPasswordApiCall = (email) => {

    const query = `email=${email}`;
    // Strike Api
    return helper.timeoutPromise(TIMEOUT_API_30_SEC, new Error(ERROR_TIMEOUT), fetch(BASE_URL + RESET_PASSWORD_URL + query, {
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

function *forgotPassword (action) {

    if (action.email && action.email.length === ZERO) {

        yield put({
            "type": API_FORGOT_PASSWORD_ACTION,
            "payload": ERROR_INCOMPLETE_DATA
        });
        return;

    }

    const response = yield call(setNewPasswordApiCall, action.email);

    if (response) {

        if (response.success && response.success == true) {

            yield put({
                "type": API_FORGOT_PASSWORD_SUCCESS_ACTION,
                "payload": response.message
            });

        } else if (response.errors && response.errors.length > ZERO) {

            yield put({
                "type": API_FORGOT_PASSWORD_FAILURE_ACTION,
                "payload": response.errors[0]
            });

        } else {

            yield put({
                "type": API_FORGOT_PASSWORD_FAILURE_ACTION,
                "payload": ERROR_INCOMPLETE_DATA
            });

        }

    } else {

        yield put({
            "type": API_FORGOT_PASSWORD_FAILURE_ACTION,
            "payload": ERROR_TIMEOUT
        });

    }

}

function *ForgotPasswordSaga () {

    yield takeLatest(API_FORGOT_PASSWORD_ACTION, forgotPassword);

}

/**
 * ForgotPasswordSaga -  Forgot password Api Call  
 */
export default ForgotPasswordSaga;
