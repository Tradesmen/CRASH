import {
    API_SET_USER_INFO,
    API_SET_USER_INFO_FAILURE,
    API_SET_USER_INFO_SUCCESS
} from "../redux/actions/types";
import {
    BASE_URL,
    ERROR_TIMEOUT,
    SET_USER_INFO_URL
} from "../utils/NetConstant";
import {TIMEOUT_API_30_SEC, ZERO} from "../utils/AppConstant";
import {call, put, takeLatest} from "redux-saga/effects";

import { INCOMPLETE_DETAILS } from "../utils/UserMessagesConstant";
import {helper} from "../utils/AppUtility";

function getQueryStringForUserInfo (data) { 

    return query;

}

const setUserInfoProfileApiCall = (data) => {

  

    let query = `title=${data.title}`;

    if (data.bio) {

        query += `&bio=${data.bio}`;

    }
    if (data.lattitude) {

        query += `&lattitude=${data.lattitude}`;

    }
    if (data.longitude) {

        query += `&longitude=${data.longitude}`;

    }
    if (data.strength) {

        query += `&strength=${data.strength}`;

    }
    if (data.street_address) {

        query += `&street_address=${data.street_address}`;

    }
    if (data.city) {

        query += `&city=${data.city}`;

    }
    if (data.nation) {

        query += `&nation=${data.nation}`;

    }

    // Strike Api
    return helper.timeoutPromise(TIMEOUT_API_30_SEC, new Error(ERROR_TIMEOUT), fetch(BASE_URL + SET_USER_INFO_URL + query, {
        "method": "PUT",
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
        catch((e) => console.log("e", e))).catch((e) => console.log("e", e));

};

function *setUserInfoProfile (action) {

    if(!action.data){

        yield put({
            "type": API_SET_USER_INFO_FAILURE,
            "payload": INCOMPLETE_DETAILS
        });
    }

    const response = yield call(setUserInfoProfileApiCall, action.data);

    if (response) {

        if (response.errors && response.errors.length > ZERO) {

            yield put({
                "type": API_SET_USER_INFO_FAILURE,
                "payload": response.errors[0]
            });

        } else {

            yield put({
                "type": API_SET_USER_INFO_SUCCESS,
                "payload": response
            });

        }

    } else {

        yield put({
            "type": API_SET_USER_INFO_FAILURE,
            "payload": ERROR_TIMEOUT
        });

    }

}

function *SetUserInfoSaga () {

    yield takeLatest(API_SET_USER_INFO, setUserInfoProfile);

}

/**
 * SetUserInfoSaga -  Set user info Api Call  
 */
export default SetUserInfoSaga;
