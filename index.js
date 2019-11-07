import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  // typeDefs : GraphQL type definitions
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("GraphQL 서버가 시작되었다"));
