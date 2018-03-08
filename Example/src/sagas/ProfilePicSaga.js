import {
    API_SET_PROFILE_PIC_ACTION,
    API_SET_PROFILE_PIC_FAILURE,
    API_SET_PROFILE_PIC_SUCCESS
} from "../redux/actions/types";
import {
    BASE_URL,
    ERROR_INCOMPLETE_DATA,
    ERROR_TIMEOUT,
    SET_PROFILE_PIC_URL
} from "../utils/NetConstant";
import {TIMEOUT_API_60_SEC, ZERO} from "../utils/AppConstant";
import {call, put, takeLatest} from "redux-saga/effects";

import {helper} from "../utils/AppUtility";

const setProfilePicApiCall = (filePath) => {

    let data = new FormData();
    data.append("profile_picture", {
        "uri": filePath, // Your file path string
        "name": "my_photo.jpg",
        "type": "image/jpg"
    });


    // Strike Api
    return helper.timeoutPromise(TIMEOUT_API_60_SEC, new Error(ERROR_TIMEOUT), fetch(BASE_URL + SET_PROFILE_PIC_URL, {
        "method": "PUT",
        "timeout": TIMEOUT_API_60_SEC,
        "headers": {
            "Accept": "application/json",
            "Auth-Token": helper.getApiToken(),
            "Content-Type": "multipart/form-data"
        },
        "body": data
    }).then((response) => response.text()).
        then((responseText) => {

            console.log("responseText--", responseText);
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

function *setProfilePic (action) {


    const response = yield call(setProfilePicApiCall, action.imagePath);

    if (response) {

        if (response.errors && response.errors.length > ZERO) {

            yield put({
                "type": API_SET_PROFILE_PIC_FAILURE,
                "payload": response.errors[0]
            });

        } else {

            yield put({
                "type": API_SET_PROFILE_PIC_SUCCESS,
                "payload": response
            });

        }

    } else {

        yield put({
            "type": API_SET_PROFILE_PIC_FAILURE,
            "payload": ERROR_TIMEOUT
        });

    }


}

function *ProfilePicSaga () {

    yield takeLatest(API_SET_PROFILE_PIC_ACTION, setProfilePic);

}

/**
 * ProfilePicSaga -  Set new password Api Call  
 */
export default ProfilePicSaga;

