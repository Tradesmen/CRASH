import {
    ACTIVATE_EMAIL_URL,
    BASE_URL,
    ERROR_INCOMPLETE_DATA,
    ERROR_TIMEOUT
} from "../utils/NetConstant";
import {
    API_EMAIL_ACTIVATE_ACTION,
    API_EMAIL_ACTIVATE_FAILUE_ACTION,
    API_EMAIL_ACTIVATE_SUCCESS_ACTION
} from "../redux/actions/types";
import {TIMEOUT_API_30_SEC, ZERO} from "../utils/AppConstant";
import {call, put, takeLatest} from "redux-saga/effects";

import {helper} from "../utils/AppUtility";

const activateEmailApiCall = (activationCode) => {

    const query = `/${activationCode}`;
    // Strike Api
    return helper.timeoutPromise(TIMEOUT_API_30_SEC, new Error(ERROR_TIMEOUT), fetch(BASE_URL + ACTIVATE_EMAIL_URL + query, {
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

function *activateEmail (action) {

    if (action.activateCode && action.activateCode.length === ZERO) {

        yield put({
            "type": API_EMAIL_ACTIVATE_FAILUE_ACTION,
            "payload": ERROR_INCOMPLETE_DATA
        });
        return;

    }

    const response = yield call(activateEmailApiCall, action.activateCode);

    if (response) {

        if (response.success && response.success == true) {

            yield put({
                "type": API_EMAIL_ACTIVATE_SUCCESS_ACTION,
                "payload": response.message
            });

        } else if(response.errors && response.errors.length > ZERO){
                yield put({
                    "type": API_EMAIL_ACTIVATE_FAILUE_ACTION,
                    "payload": response.errors[0]
                });
            }else{
                yield put({
                    "type": API_EMAIL_ACTIVATE_FAILUE_ACTION,
                    "payload": ERROR_INCOMPLETE_DATA
                });
            }

    } else {

        yield put({
            "type": API_EMAIL_ACTIVATE_FAILUE_ACTION,
            "payload": ERROR_TIMEOUT
        });

    }

}

function *ActivateEmailSaga () {

    yield takeLatest(API_EMAIL_ACTIVATE_ACTION, activateEmail);

}

/**
 * ActivateEmailSaga -  Activate email Api Call  
 */
export default ActivateEmailSaga;

