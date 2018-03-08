import {
    ADD_USER_DETAILS_URL,
    BASE_URL,
    ERROR_TIMEOUT
} from "../utils/NetConstant";
import {
    API_SET_USER_DETAILS,
    API_SET_USER_DETAILS_FAILURE,
    API_SET_USER_DETAILS_SUCCESS
} from "../redux/actions/types";
import {TIMEOUT_API_30_SEC, ZERO} from "../utils/AppConstant";
import {call, put, takeLatest} from "redux-saga/effects";

import DataManager from "../utils/DataManager";
import {helper} from "../utils/AppUtility";

const setUserProfileApiCall = (data) => {


    // Strike Api
    return helper.timeoutPromise(TIMEOUT_API_30_SEC, new Error(ERROR_TIMEOUT), fetch(BASE_URL + ADD_USER_DETAILS_URL, {
        "method": "POST",
        "timeout": TIMEOUT_API_30_SEC,
        "headers": {
            "Accept": "application/json",
            "Auth-Token": helper.getApiToken(),
            "Content-Type": "application/json"
        },
        
        "body": JSON.stringify(data)
    }).then((response) => response.text()).
        then((responseText) => {

            try {

                const result = JSON.parse(responseText);
                if (result) {

                    DataManager.getInstance().setNewSectionAdded(true);
                    return result;

                }

                return null;

            } catch (e) {

                return null;

            }

        }).
        catch((e) => console.log("e",e))).catch((e) => console.log("e",e));

};

function *setUserProfile (action) {

  

    const response = yield call(setUserProfileApiCall,action.validatedData);

    if (response) {

        if (response.errors && response.errors.length > ZERO) {

            yield put({
                "type": API_SET_USER_DETAILS_FAILURE,
                "payload": response.errors[0]
            });

        } else {

            yield put({
                "type": API_SET_USER_DETAILS_SUCCESS,
                "payload": response
            });

        }

    } else {

        yield put({
            "type": API_SET_USER_DETAILS_FAILURE,
            "payload": ERROR_TIMEOUT
        });

    }

}

function *SetUserDetailsSaga () {

    yield takeLatest(API_SET_USER_DETAILS, setUserProfile);

}

/**
 * SignUpSaga -  Sign in Api Call  
 */
export default SetUserDetailsSaga;
