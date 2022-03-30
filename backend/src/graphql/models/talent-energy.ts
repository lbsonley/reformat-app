import { Field, ID, ObjectType } from 'type-graphql';
import { TalentEnergies } from '@prisma/client';

@ObjectType({ description: 'the energy with which the talent is applied' })
class TalentEnergy {
  @Field(() => ID)
  id: TalentEnergies;

  @Field({ description: 'the talent energy display name' })
  name: string;
}

export default TalentEnergy;
