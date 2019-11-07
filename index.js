import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({});

server.start(() => console.log("GraphQL 서버가 시작되었다"));
