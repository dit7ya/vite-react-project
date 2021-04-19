import { ApolloServer, gql } from "apollo-server-lambda";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    hi(name: String!): String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello halum!",
    hi: (_, { name }, __) => {
      return `Hello there, ${name}!`
    }

  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true, // Enable GraphQL playground
});

exports.handler = server.createHandler();
