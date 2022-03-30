import { Field, ID, ObjectType } from 'type-graphql';
import { LifeJourneys } from '@prisma/client';

@ObjectType({ description: 'the life journey' })
class LifeJourney {
  @Field(() => ID)
  id: LifeJourneys;

  @Field({ description: 'the life journey display name' })
  name: string;
}

export default LifeJourney;
