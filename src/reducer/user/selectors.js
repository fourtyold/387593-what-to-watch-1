import NameSpaces from "../name-spaces.js";

const NAMESPACE = NameSpaces.USER;

const checkIsAuthorizationRequired = (state) => {
  if (state[NAMESPACE].id === null) {
    return true;
  }
  return false;
};

const getAvatarUrl = (state) => state[NAMESPACE].avatarUrl;

export {checkIsAuthorizationRequired, getAvatarUrl};
