import { getByid, getMovies, addMovie, deleteMovie } from "./db";

const reslovers = {
  // data를 보내는 역할
  Query: {
    movies: () => getMovies()
    // movie: (_, arg) => {
    //   console.log(arg); // { id: 1} 객체 혀앹로 출력
    // }
    // movie: (_, arg) => getByid(arg.id)
    // movie: (_, { id }) => getByid(id)
  }
};

export default reslovers;
