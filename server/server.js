const express = require('express');
const path = require('path');
const db = require('./config/connection');


//GraphQL
const { typeDefs, resolvers } = require('./schemas');

//Apollo Import
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

async function runApolloServer() {
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

//Middleware
await server.start()
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => { 
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
 });
}


runApolloServer();
