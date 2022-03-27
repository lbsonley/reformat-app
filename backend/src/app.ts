import 'reflect-metadata';
import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { context } from '../prisma/context';
import createSchema from './graphql/schema';

async function main() {
  const app = express();
  const httpServer = http.createServer(app);

  const schema = await createSchema();

  const server = new ApolloServer({
    context,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    schema,
  });

  await server.start();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: process.env.PORT || 4000 }, resolve);
  });

  console.log('------------------------------------------');
  console.log('Server has started! Listening on port 4000');
  console.log('------------------------------------------');
}

export default main;
