/**
 * Export Reducers to map in components
 */
import AuthReducer from "./AuthReducer";
import MapReducer from "./MapReducer";
import RWNavigationReducer from "./RWNavigationReducer";
import UserDetailsReducer from "./UserDetailsReducer";
import {combineReducers} from "redux";

export default combineReducers({

    "authReducer": AuthReducer,
    "nav": RWNavigationReducer,
    "MapReducer": MapReducer,
    "userDetailReducer": UserDetailsReducer
});

