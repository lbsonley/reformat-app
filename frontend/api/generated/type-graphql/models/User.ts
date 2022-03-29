import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Archetype } from "../models/Archetype";
import { LifeJourney } from "../models/LifeJourney";
import { TalentEnergy } from "../models/TalentEnergy";
import { TalentLevel } from "../models/TalentLevel";
import { Archetypes } from "../enums/Archetypes";
import { Languages } from "../enums/Languages";
import { LifeJourneys } from "../enums/LifeJourneys";
import { TalentEnergies } from "../enums/TalentEnergies";
import { TalentLevels } from "../enums/TalentLevels";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => Languages, {
    nullable: false
  })
  language!: "de" | "en" | "fr" | "it";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  animal?: string | null;

  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: true
  })
  archetypeId?: "mentor" | "herald" | "gatekeeper" | "joker" | null;

  archetype?: Archetype | null;

  @TypeGraphQL.Field(_type => LifeJourneys, {
    nullable: true
  })
  lifeJourneyId?: "learn" | "stand" | "resolve" | null;

  lifeJourney?: LifeJourney | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  talent?: string | null;

  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: true
  })
  talentLevelId?: "ego" | "emotion" | "tao" | null;

  talentLevel?: TalentLevel | null;

  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: true
  })
  talentEnergyId?: "push" | "neutral" | "pull" | null;

  talentEnergy?: TalentEnergy | null;

  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: true
  })
  heroJourneyProgress?: "mentor" | "herald" | "gatekeeper" | "joker" | null;
}
