import { Ctx, Query, Resolver } from 'type-graphql';
import TalentLevel from '../models/talent-level';
import { Context } from '../../../prisma/context';

@Resolver()
class TalentLevelResolver {
  @Query(() => [TalentLevel])
  allTalentLevels(@Ctx() context: Context) {
    return context.prisma.talentLevel.findMany();
  }
}

export default TalentLevelResolver;
