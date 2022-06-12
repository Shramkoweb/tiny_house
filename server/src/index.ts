import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core';
import http from 'http';

import {
  typeDefs,
  resolvers,
} from './graphql';

const PORT = 9000;

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
  });

  await server.start();
  server.applyMiddleware({app, path: '/api'});

  await new Promise<void>(resolve => httpServer.listen({port: PORT}, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startApolloServer();
