/**
 * App Singleton Class 
 */
export default class DataManager {

    static myInstance = null;

     apiToken = "4e21ba2596cefd54635aa675141fab46f4420001b01cf385dab0da867e5a9150939991b8d6b8d03042cc8d70e9da14f6acdce5b94891bf601343a6a1906b2995";

     userInfo = {"id":9,"email":"yogesh.lolusare7@gmail.com","first_name":"Yogesh","last_name":"Lolusare","mobile_number":"7875006661","profile_picture":{"url":"/uploads/user/profile_picture/9/1519590090.jpg"}}

     isNewProfileDetailsAdded = false;
     static getInstance () {

         if (this.myInstance === null) {

             this.myInstance = new DataManager();

         }
         return this.myInstance;

     }

     setApiToken (apiToken) {

         this.apiToken = apiToken;

     }

     getApiToken () {

         return this.apiToken;

     }

     setUserInfo (userInfo) {

        this.userInfo = userInfo;

    }


    getUserInfo () {

        return this.userInfo;

    }


    setNewSectionAdded(value) {

        this.isNewProfileDetailsAdded = value;

    }


    getNewSectionAdded () {

        return this.isNewProfileDetailsAdded;

    }

}
