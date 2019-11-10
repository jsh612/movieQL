import { getMovies, getMovie, getSuggestions } from "./db";

const reslovers = {
  // data를 보내는 역할
  Query: {
    movies: (_, { rating, limit }) => getMovies(rating, limit),
    // movie: (_, arg) => {
    //   console.log(arg); // { id: 1} 객체 혀앹로 출력
    // }
    // movie: (_, arg) => getByid(arg.id)
    // movie: (_, { id }) => getByid(id)

    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

export default reslovers;
