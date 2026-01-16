const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Query {
    hello: [String!]
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return ["Hello", "my", "Friend"];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
