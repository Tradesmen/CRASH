import {
    API_DELETE_USER_DETAILS,
    API_DELETE_USER_DETAILS_FAILURE,
    API_DELETE_USER_DETAILS_SUCCESS
} from "../redux/actions/types";
import {
    BASE_URL,
    DELETE_USER_PROFILE_URL,
    ERROR_TIMEOUT
} from "../utils/NetConstant";
import {TIMEOUT_API_30_SEC, ZERO} from "../utils/AppConstant";
import {call, put, takeLatest} from "redux-saga/effects";

import {helper} from "../utils/AppUtility";

const deleteUserProfileItemApiCall = (model,itemId) => {
    const query = `?model=${model}`;

    
    // Strike Api
    return helper.timeoutPromise(TIMEOUT_API_30_SEC, new Error(ERROR_TIMEOUT), fetch(BASE_URL + DELETE_USER_PROFILE_URL + itemId + query, {
        "method": "DELETE",
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

function *deleteUserProfileItem (action) {

    if (action.model.length === ZERO || action.itemId.length === ZERO) {

        yield put({
            "type": API_DELETE_USER_DETAILS_FAILURE,
            "payload": ERROR_INCOMPLETE_DATA
        });
        return;

    }


    const response = yield call(deleteUserProfileItemApiCall,action.model,action.itemId);

    if (response) {

        if (response.errors && response.errors.length > ZERO) {

            yield put({
                "type": API_DELETE_USER_DETAILS_FAILURE,
                "payload": response.errors[0]
            });

        } else {

            yield put({
                "type": API_DELETE_USER_DETAILS_SUCCESS,
                "payload": response
            });

        }

    } else {

        yield put({
            "type": API_DELETE_USER_DETAILS_FAILURE,
            "payload": ERROR_TIMEOUT
        });

    }

}

function *DeleteUserDetailsSaga () {

    yield takeLatest(API_DELETE_USER_DETAILS, deleteUserProfileItem);

}

/**
 * SignUpSaga -  Sign in Api Call  
 */
export default DeleteUserDetailsSaga;
