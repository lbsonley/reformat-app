import {
  Archetypes,
  Languages,
  LifeJourneys,
  TalentEnergies,
  TalentLevels,
} from '@prisma/client';
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
  lastName: string;

  @Field()
  language: Languages;

  @Field({ nullable: true })
  animal?: string;

  @Field({ nullable: true })
  archetypeId?: Archetypes;

  @Field({ nullable: true })
  lifeJourneyId?: LifeJourneys;

  @Field({ nullable: true })
  talent?: string;

  @Field({ nullable: true })
  talentLevelId?: TalentLevels;

  @Field({ nullable: true })
  talentEnergyId?: TalentEnergies;

  @Field({ nullable: true })
  heroJourneyProgress?: Archetypes;
}

export default User;
