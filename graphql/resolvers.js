import { people, getByid } from "./db";

const reslovers = {
  // data를 보내는 역할
  Query: {
    people: () => people,
    person: id => getByid(id)
  }
};

export default reslovers;
