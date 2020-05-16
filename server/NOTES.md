# Step by Step create a Server
1. Create a folder ie. server
2. mkdir server && cd server
3. npm init -y
4. npm i express dotenv nodemon
5. Create a new file named .env
6. Create a new file named server.js
7. Edit script at package.json

## Add Apollo Graphql Server
1. cd server
2. npm i apollo-server graphql
3. Create a new file named gpl-server.js
4. Edit script at package.json

## Add Apollo Graphql Server Express
1. cd server
2. npm i apollo-server-express
3. Edit script at server.js
4. Edit script at package.json

## Multiple typeDefs
1. cd server
2. Merge graphql schemas
3. npm i merge-graphql-schemas
4. Create a new folder ex. typeDefs

## Multiple Resolvers
1. cd server
2. Create a new folder ie. resolvers
3. Create files like files in folder typeDefs

## Connect Server to Database ie. MongoDB Atlas or MongoDB on Local Computer

### Mongo Atlas
- Free Service can only use one connection
- Log In [MongoDB Atlas](http://mongodb.com/cloud/atlas)
- Create a (free) Cluster ie. GraphQLReactNode
- Add white list Network Access (Access from Any IP Address Anywhere)
- Add Database User to Access the Database to Read and Write to any database
- Connect Cluster to Application
- install mongoose -> npm i mongoose