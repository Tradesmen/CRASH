import { API_SET_PROFILE_PIC_ACTION } from "./types";

export const setProfilePicAction = ({imagePath}) => ({
    imagePath,
    "type": API_SET_PROFILE_PIC_ACTION
});
