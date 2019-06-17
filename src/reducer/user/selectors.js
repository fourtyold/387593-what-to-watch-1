import NameSpaces from "../name-spaces.js";

const NAMESPACE = NameSpaces.USER;

const checkIsAuthorizationRequired = (state) => state[NAMESPACE].isAuthorizationRequired;

const getAvatarUrl = (state) => state[NAMESPACE].avatarUrl;

export {checkIsAuthorizationRequired, getAvatarUrl};
