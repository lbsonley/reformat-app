import {
  Archetypes,
  LifeJourneys,
  Modules,
  TalentEnergies,
  TalentLevels,
} from '@prisma/client';
import { Field, ID, ObjectType } from 'type-graphql';
import Archetype from './archetype';
import LifeJourney from './life-journey';
import TalentEnergy from './talent-energy';
import TalentLevel from './talent-level';
/* eslint-disable-next-line import/no-cycle */
import User from './user';

@ObjectType({ description: 'the user' })
class Profile {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  @Field(() => User)
  user: User;

  @Field({ nullable: true })
  animal?: string;

  @Field(() => Archetype, { nullable: true })
  archetype?: Archetype;

  @Field({ nullable: true })
  archetypeId?: Archetypes;

  @Field(() => LifeJourney, { nullable: true })
  lifeJourney?: LifeJourney;

  @Field({ nullable: true })
  lifeJourneyId?: LifeJourneys;

  @Field({ nullable: true })
  talent?: string;

  @Field(() => TalentLevel, { nullable: true })
  talentLevel?: TalentLevel;

  @Field({ nullable: true })
  talentLevelId?: TalentLevels;

  @Field(() => TalentEnergy, { nullable: true })
  talentEnergy?: TalentEnergy;

  @Field({ nullable: true })
  talentEnergyId?: TalentEnergies;

  @Field({ nullable: true })
  currentModule?: Modules;
}

export default Profile;
