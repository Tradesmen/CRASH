/**
 * App helper functions 
 */
import DataManager from "../utils/DataManager";

export const helper = {
    "apiTimeoutPromise" (timeout, err, promise) {

        return new Promise((resolve, reject) => {

            promise.then(resolve, reject);
            setTimeout(reject.bind(null, err), timeout);

        });

    },
    "timeoutPromise" (timeout, error, promise) {

        return helper.apiTimeoutPromise(timeout, error, promise).
            catch(() => null);

    },
    "setApiToken": (apiKey) => {

        const dataManager = DataManager.getInstance();
        dataManager.setApiToken(apiKey);

    },
    "getApiToken": () => {

        return DataManager.getInstance().getApiToken();

    },
    "setUserInfo": (userInfo) => {
        
        const dataManager = DataManager.getInstance();
        dataManager.setUserInfo(userInfo);

    },
    "getUserInfo": () => {

        return DataManager.getInstance().getUserInfo();

    }
};
