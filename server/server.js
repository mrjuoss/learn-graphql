const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas');

require('dotenv').config();

// express server
const app = express();
// db
const db = async () => {
  try {
    const success = await mongoose.connect(process.env.DATABASE_COUD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('DB Connected');
  } catch (error) {
    console.log('DB Connection Error ',error);
  }
}
// execute DB Conenction
db();
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