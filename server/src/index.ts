import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';

import {
  typeDefs,
  resolvers,
} from './graphql';

import { connectDatabase } from './database';
import { NodeEnv } from './lib/types';

const isProduction = process.env.NODE_ENV === NodeEnv.production;


async function startApolloServer() {
  const db = await connectDatabase();
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    introspection: !isProduction,
    context: () => ({ db }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app, path: '/api' });

  await new Promise<void>(resolve => httpServer.listen({ port: process.env.PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
}

startApolloServer();
