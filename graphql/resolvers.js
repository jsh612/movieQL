// 이게 곧 Database
const jsh = {
  name: "jsh",
  age: 20,
  gender: "male"
};

const reslovers = {
  // data를 보내는 역할
  Query: {
    person: () => jsh
  }
};

export default reslovers;
