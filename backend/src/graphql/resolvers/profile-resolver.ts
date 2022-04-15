import { Ctx, Query, Resolver } from 'type-graphql';
import Profile from '../models/profile';
import { Context } from '../../../prisma/context';

@Resolver()
class ProfileResolver {
  @Query(() => [Profile])
  allProfiles(@Ctx() context: Context) {
    return context.prisma.profile.findMany({
      include: {
        user: true,
      },
    });
  }
}

export default ProfileResolver;
