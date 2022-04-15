import { buildSchema } from 'type-graphql';
import { resolvers } from '../../prisma/generated/type-graphql';

const createSchema = async () =>
  buildSchema({
    resolvers,
  });

export default createSchema;
