import { Ctx, Query, Resolver } from 'type-graphql';
import User from '../models/user';
import { Context } from '../../../prisma/context';

@Resolver()
class UserResolver {
  @Query(() => [User])
  allUsers(@Ctx() context: Context) {
    return context.prisma.user.findMany();
  }
}

export default UserResolver;
