import {
    API_SIGNUP_ACTION,
    API_SIGNUP_FAILURE_ACTION,
    API_SIGNUP_SUCCESS_ACTION
} from "../redux/actions/types";
import {
    BASE_URL,
    ERROR_INCOMPLETE_DATA,
    ERROR_TIMEOUT,
    SIGNUP_URL
} from "../utils/NetConstant";
import {TIMEOUT_API_30_SEC, ZERO} from "../utils/AppConstant";
import {call, put, takeLatest} from "redux-saga/effects";

import {helper} from "../utils/AppUtility";

const signUpApiCall = (userObj) => {

    const query = `first_name=${userObj.firstName}&last_name=${userObj.lastName}&email=${userObj.email}&mobile_number=${userObj.mobNumber}&password=${userObj.password}&password_confirmation=${userObj.password}`;
    // Strike Api
    return helper.timeoutPromise(TIMEOUT_API_30_SEC, new Error(ERROR_TIMEOUT), fetch(BASE_URL + SIGNUP_URL + query, {
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

function *signUpUser (action) {

    if (action.userObj === null) {

        yield put({
            "type": API_SIGNUP_FAILURE_ACTION,
            "payload": ERROR_INCOMPLETE_DATA
        });
        return;

    }

    const response = yield call(signUpApiCall, action.userObj);

    if (response) {

        if (response.success && response.success == true) {

            yield put({
                "type": API_SIGNUP_SUCCESS_ACTION,
                "payload": response.message
            });

        } else {

            if(response.errors && response.errors.length > ZERO){
                yield put({
                    "type": API_SIGNUP_FAILURE_ACTION,
                    "payload": response.errors[0]
                });
            }else{
                yield put({
                    "type": API_SIGNUP_FAILURE_ACTION,
                    "payload": ERROR_INCOMPLETE_DATA
                });
            }
            

        }

    } else {

        yield put({
            "type": API_SIGNUP_FAILURE_ACTION,
            "payload": ERROR_TIMEOUT
        });

    }

}

function *SignUpSaga () {

    yield takeLatest(API_SIGNUP_ACTION, signUpUser);

}

/**
 * SignUpSaga - Sign Up Api Call  
 */
export default SignUpSaga;