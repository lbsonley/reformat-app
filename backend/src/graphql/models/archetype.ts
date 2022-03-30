import { Field, ID, ObjectType } from 'type-graphql';
import { Archetypes } from '@prisma/client';

@ObjectType({ description: 'the archetype' })
class Archetype {
  @Field(() => ID)
  id: Archetypes;

  @Field({ description: 'the archetype display name' })
  name: string;
}

export default Archetype;
