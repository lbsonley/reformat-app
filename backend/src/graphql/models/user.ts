import { Archetypes, Languages, LifeJourneys, TalentEnergies } from '@prisma/client';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'the user' })
class User {
  @Field(() => ID)
  id: string;

  @Field({ description: "the user's email address" })
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: String

  @Field()
  language: Languages

  @Field({ nullable: true })
  animal?: String

  @Field({ nullable: true })
  talent?: String

  @Field({ nullable: true })
  talentEnergy?: TalentEnergies

  @Field({ nullable: true })
  heroJourneyProgress?: Archetypes

  @Field({ nullable: true })
  archetypeId?: Archetypes

  @Field({ nullable: true })
  lifeJourneyId?: LifeJourneys
}

export default User;
