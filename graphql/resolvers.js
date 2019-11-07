import { people, getByid } from "./db";

const reslovers = {
  // data를 보내는 역할
  Query: {
    people: () => people,
    // person: (_, arg) => {
    //   console.log(arg); // { id: 1} 객체 혀앹로 출력
    // }
    // person: (_, arg) => getByid(arg.id)
    person: (_, { id }) => getByid(id)
  }
};

export default reslovers;
