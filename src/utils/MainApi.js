import { MAIN_API_URL as BASE_URL, headers, addAuthHeader } from "./consts";
import { getResponse } from "./utils";

export const register = data => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(getResponse);
};
export const login = data => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(getResponse);
};
export const checkToken = _ => {
  const headers = addAuthHeader();
  return fetch(`${BASE_URL}/users/me`, {
    headers: headers
  }).then(getResponse);
};
export const getUserInfo = () => {
  const headers = addAuthHeader();
  return fetch(`${BASE_URL}/users/me`, {
    headers: headers
  }).then(getResponse);
};
export const getMovies = () => {
  const headers = addAuthHeader();
  return fetch(`${BASE_URL}/movies`, {
    headers: headers
  }).then(getResponse);
};
export const createMovie = item => {
  const headers = addAuthHeader();
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(item)
  }).then(getResponse);
};
export const setUserInfo = item => {
  const headers = addAuthHeader();
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: headers,
    body: (JSON.stringify = item)
  }).then(getResponse);
};
export const deleteMovie = id => {
  const headers = addAuthHeader();
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: headers
  }).then(getResponse);
};
