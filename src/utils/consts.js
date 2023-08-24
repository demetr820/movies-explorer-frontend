// export const MAIN_API_URL = "https://api.movies-exp.nomoredomains.rocks";
export const MAIN_API_URL = "http://localhost:3000";
export const MOVIES_API_URL = "https://api.nomoreparties.co/beatfilm-movies";
export const MOBILE_WINDOW_WIDTH = 650;
export const MOBILE_MOVIES_COUNT = 3;
export const DESKTOP_MOVIES_COUNT = 7;

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
export const addAuthHeader = () => {
  return {
    ...headers,
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  };
};
