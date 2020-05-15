const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const http = require('http');
const path = require('path');
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas');

require('dotenv').config();


// express server
const app = express();

// typeDefs
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './typeDefs')));

// resolvers
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

// graphql server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});
// applyMiddleware method connects ApolloServer to a specific HTTP Framework ie: express
apolloServer.applyMiddleware({
  app
});
// server
const httpServer = http.createServer(app);
// rest endpoint
app.get('/rest', (req, res) => {
  res.json({
    data: 'You hit rest endpoint'
  });
});

// port
app.listen(process.env.PORT, function() {
  console.log(`Server is ready at http://localhost:${process.env.PORT}`);
  console.log(`Graphql Server is ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`);
});