import { MOVIES_API_URL as BASE_URL, headers } from "./consts";
import { getResponse } from "./utils";

export const getMovies = () => {
  return fetch(BASE_URL, {
    headers: headers
  }).then(getResponse);
};
