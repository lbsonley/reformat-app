import { Ctx, Query, Resolver } from 'type-graphql';
import TalentEnergy from '../models/talent-energy';
import { Context } from '../../../prisma/context';

@Resolver()
class TalentEnergyResolver {
  @Query(() => [TalentEnergy])
  allTalentEnergies(@Ctx() context: Context) {
    return context.prisma.talentEnergy.findMany();
  }
}

export default TalentEnergyResolver;
