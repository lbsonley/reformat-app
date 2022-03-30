import { Ctx, Query, Resolver } from 'type-graphql';
import LifeJourney from '../models/life-journey';
import { Context } from '../../../prisma/context';

@Resolver()
class LifeJourneyResolver {
  @Query(() => [LifeJourney])
  allLifeJourneys(@Ctx() context: Context) {
    return context.prisma.lifeJourney.findMany();
  }
}

export default LifeJourneyResolver;
