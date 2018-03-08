import {
    API_SIGNIN_ACTION,
    API_SIGNIN_FAILURE_ACTION,
    API_SIGNIN_SUCCESS_ACTION
} from "../redux/actions/types";
import {
    BASE_URL,
    ERROR_TIMEOUT,
    SIGNIN_URL
} from "../utils/NetConstant";
import {TIMEOUT_API_30_SEC, ZERO} from "../utils/AppConstant";
import {call, put, takeLatest} from "redux-saga/effects";

import {helper} from "../utils/AppUtility";

const signInApiCall = (email, password) => {

    const query = `email=${email}&password=${password}`;
    // Strike Api
    return helper.timeoutPromise(TIMEOUT_API_30_SEC, new Error(ERROR_TIMEOUT), fetch(BASE_URL + SIGNIN_URL + query, {
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

                    if (result.auth_token) {

                        helper.setApiToken(result.auth_token);

                    }
                    if (result.user) {

                        helper.setUserInfo(result.user);

                    }

                    return result;

                }

                return null;

            } catch (e) {

                return null;

            }

        }).
        catch(() => null)).catch(() => null);

};

function *signInUser (action) {

    if (action.email.length === ZERO || action.password.length === ZERO) {

        yield put({
            "type": API_SIGNIN_FAILURE_ACTION,
            "payload": ERROR_INCOMPLETE_DATA
        });
        return;

    }

    const response = yield call(signInApiCall, action.email, action.password);

    if (response) {

        if (response.errors && response.errors.length > ZERO) {

            yield put({
                "type": API_SIGNIN_FAILURE_ACTION,
                "payload": response.errors[0]
            });

        } else {

            yield put({
                "type": API_SIGNIN_SUCCESS_ACTION,
                "payload": response
            });

        }

    } else {

        yield put({
            "type": API_SIGNIN_FAILURE_ACTION,
            "payload": ERROR_TIMEOUT
        });

    }

}

function *SignInSaga () {

    yield takeLatest(API_SIGNIN_ACTION, signInUser);

}

/**
 * SignUpSaga -  Sign in Api Call  
 */
export default SignInSaga;
