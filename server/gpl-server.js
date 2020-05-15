const { ApolloServer } = require('apollo-server');
require('dotenv').config();

// query/mutation/subscription type
const typeDefs = `
  type Query {
    totalPosts: Int!
  }
`;

// resolvers
const resolvers = {
  Query: {
    totalPosts: () => 42
  }
}

// graphql server'
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

// port
apolloServer.listen(process.env.PORT, function () {
  console.log(`Graphql server is running at http://localhist:${process.env.PORT}`);
});