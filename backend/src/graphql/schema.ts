import { buildSchema } from 'type-graphql';
import UserResolver from './resolvers/user-resolver';

const createSchema = async () =>
  buildSchema({
    resolvers: [UserResolver],
  });

export default createSchema;
