export const endpoint = "https://api.nomoreparties.co";
export const getResponse = res => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
const getShortMovies = movies => {
  return movies.filter(movie => {
    return movie.duration <= 40;
  });
};
export const getSearchResult = (query, items, isFilter) => {
  let searchResult = items.filter(item => {
    return (
      item["nameRU"]
        .toString()
        .toLowerCase()
        .includes(query.toLowerCase()) ||
      item["nameEN"]
        .toString()
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  });
  if (isFilter) {
    searchResult = getShortMovies(searchResult);
  }
  return searchResult;
};
export const formatDuration = minutes => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}ч ${remainingMinutes}м`;
};
export const imageUrlCheck = url => {
  if (typeof url.formats !== "undefined") {
    return `${endpoint}${url.formats.thumbnail.url}`;
  } else {
    return url;
  }
};
