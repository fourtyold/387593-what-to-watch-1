export const tabsNames = [`Overview`, `Details`, `Reviews`];

export const TabsTypes = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const RatingTresholds = [
  {limit: 3, value: `bad`},
  {limit: 5, value: `normal`},
  {limit: 8, value: `good`},
  {limit: 10, value: `very good`},
  {limit: 1000, value: `awesome`}
];

export const API_CONFIG = {
  baseURL: `https://es31-server.appspot.com/wtw`,
  timeout: 5000,
  withCredentials: true
};

export const SERVER_RESPONCES = {
  FORBIDDEN: 403
};

export const REVIEW_LENGTH = {
  MIN: 40,
  MAX: 400
};

export const MINUTES_PER_HOUR = 60;

export const HANDLER_DELAY = 1000;

export const INITIAL_FILMS_NUMBER = 20;

export const FILMS_SHOW_STEP = 20;

export const VIDEO_UPDATE_FREQ = 1;
