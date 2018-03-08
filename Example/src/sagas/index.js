import {all, fork} from "redux-saga/effects";

import ActivateEmailSaga from "./ActivateEmailSaga";
import DeleteUserDetailsSaga from "./DeleteUserDetailsSaga";
import ForgotPasswordSaga from "./ForgotPasswordSaga";
import MapSaga from "./MapSaga";
import ProfilePicSaga from "./ProfilePicSaga";
import SetNewPasswordSaga from "./SetNewPasswordSaga";
import SetUserDetailsSaga from "./SetUserDetailsSaga";
import SetUserInfoSaga from "./SetUserInfoSaga";
import SignInSaga from "./SignInSaga";
import SignUpSaga from "./SignUpSaga";
import UserDetailsSaga from "./UserDetailsSaga";

export default function *rootSaga () {

    yield all([
        fork(SignInSaga),
        fork(SignUpSaga),
        fork(ActivateEmailSaga),
        fork(ForgotPasswordSaga),
        fork(SetNewPasswordSaga),
        fork(MapSaga),
        fork(ProfilePicSaga),
        fork(UserDetailsSaga),
        fork(DeleteUserDetailsSaga),
        fork(SetUserDetailsSaga),
        fork(SetUserInfoSaga)
    ]);

}
