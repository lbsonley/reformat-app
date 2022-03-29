import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import User from '../models/user';
import { Context } from '../../../prisma/context';

@Resolver()
class UserResolver {
  @Query(() => [User])
  allUsers(@Ctx() context: Context) {
    return context.prisma.user.findMany();
  }

  @Query(() => User)
  userById(@Arg('id') id: string, @Ctx() context: Context) {
    const user = context.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error('User not found!');
    }

    return user;
  }
}

export default UserResolver;
