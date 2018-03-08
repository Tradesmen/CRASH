import {
    API_FORGOT_PASSWORD_SUCCESS_ACTION,
    API_SET_NEW_PASSWORD_ACTION,
    API_SET_NEW_PASSWORD_FAILURE_ACTION,
    API_SET_NEW_PASSWORD_SUCCESS_ACTION
} from "../redux/actions/types";
import {
    BASE_URL,
    ERROR_INCOMPLETE_DATA,
    ERROR_TIMEOUT,
    RESET_PASSWORD_URL,
    SET_NEW_PASSWORD_URL
} from "../utils/NetConstant";
import {TIMEOUT_API_30_SEC, ZERO} from "../utils/AppConstant";
import {call, put, takeLatest} from "redux-saga/effects";

import {helper} from "../utils/AppUtility";

const setNewPasswordApiCall = (token, newPassword) => {

    const query = `token=${token}&password=${newPassword}`;
    // Strike Api
    return helper.timeoutPromise(TIMEOUT_API_30_SEC, new Error(ERROR_TIMEOUT), fetch(BASE_URL + SET_NEW_PASSWORD_URL + query, {
        "method": "POST",
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

function *setNewPassword (action) {

    if (action.token && action.token.length === ZERO || action.newPassword && action.newPassword.length === ZERO) {

        yield put({
            "type": API_FORGOT_PASSWORD_SUCCESS_ACTION,
            "payload": ERROR_INCOMPLETE_DATA
        });
        return;

    }

    const response = yield call(setNewPasswordApiCall, action.token, action.newPassword);

    if (response) {

        if (response.errors && response.errors.length > ZERO) {

            yield put({
                "type": API_SET_NEW_PASSWORD_FAILURE_ACTION,
                "payload": response.errors[0]
            });

        }
        else if (response.errors) {

            yield put({
                "type": API_SET_NEW_PASSWORD_FAILURE_ACTION,
                "payload": "Link not valid or expired. Try generating a new link."
            });
        
} else {

            yield put({
                "type": API_SET_NEW_PASSWORD_SUCCESS_ACTION,
                "payload": "SUCCESS"
            });

        }

    } else {

        yield put({
            "type": API_SET_NEW_PASSWORD_FAILURE_ACTION,
            "payload": ERROR_TIMEOUT
        });

    }

}

function *SetNewPasswordSaga () {

    yield takeLatest(API_SET_NEW_PASSWORD_ACTION, setNewPassword);

}

/**
 * SetNewPasswordSaga -  Set new password Api Call  
 */
export default SetNewPasswordSaga;
