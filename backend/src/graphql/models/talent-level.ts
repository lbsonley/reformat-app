import { Field, ID, ObjectType } from 'type-graphql';
import { TalentLevels } from '@prisma/client';

@ObjectType({ description: 'the level on which the talent operates' })
class TalentLevel {
  @Field(() => ID)
  id: TalentLevels;

  @Field({ description: 'display name' })
  name: string;
}

export default TalentLevel;
