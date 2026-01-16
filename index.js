const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { categories, products, reviews } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
});

startStandaloneServer(server, {
  context: async () => ({
    categories,
    products,
    reviews,
  }),
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
