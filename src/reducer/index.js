import {combineReducers} from "redux";
import {reducer as films} from "./films/films.js";
import {reducer as filter} from "./filter/filter.js";
import {reducer as user} from "./user/user.js";
import NameSpaces from "./name-spaces.js";

export default combineReducers({
  [NameSpaces.FILMS]: films,
  [NameSpaces.FILTER]: filter,
  [NameSpaces.USER]: user
});
