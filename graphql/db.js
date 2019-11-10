// 이게 가상의 Database 자료
import nodeFetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  nodeFetch(API_URL)
    .then(res => res.json())
    .then(json => json.data.moives);
};
