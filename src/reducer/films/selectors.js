import {createSelector} from "reselect";
import NameSpaces from "../name-spaces.js";
import {getFilterGenre} from "../filter/selectors.js";

const NAMESPACE = NameSpaces.FILMS;

const getFullFilmsList = (state) => state[NAMESPACE].fullFilmsList;

const getGenresList = (state) => {
  const genres = getFullFilmsList(state).map((film) => film.genre);
  const genresSet = new Set(genres);
  const genresArray = Array.from(genresSet);
  genresArray.unshift(`All genres`);
  return genresArray;
};

const getFilteredFilmsList = createSelector(
    getFullFilmsList,
    getFilterGenre,
    (fullFilmsList, currentGenre) => {
      if (currentGenre === `All genres`) {
        return fullFilmsList;
      }
      return fullFilmsList.filter((film) => film.genre === currentGenre);
    }
);

const getFilmById = (state, props) => {
  const fullFilmsList = getFullFilmsList(state);
  for (let i = 0; i < fullFilmsList.length; i++) {
    if (fullFilmsList[i].id === Number(props.match.params.id)) {
      return fullFilmsList[i];
    }
  }
  return null;
};

export {getGenresList, getFilteredFilmsList, getFilmById};
