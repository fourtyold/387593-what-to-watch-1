import NameSpaces from "../name-spaces.js";

const NAMESPACE = NameSpaces.FILTER;

const getFilterGenre = (state) => state[NAMESPACE].filterGenre;

export {getFilterGenre};
