import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import User from '../models/user';
import { Context } from '../../../prisma/context';
import { UserCreateInput } from '../../../prisma/generated/type-graphql/resolvers/inputs/UserCreateInput';

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

  @Mutation(() => User)
  async createUser(
    @Arg('data') data: UserCreateInput,
    @Ctx() context: Context
  ) {
    const existingUser = await context.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error(`User with email: ${data.email} already exists`);
    }

    return context.prisma.user.create({
      data,
    });
  }
}

export default UserResolver;
