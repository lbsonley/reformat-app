import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Archetypes } from "../../enums/Archetypes";
import { Languages } from "../../enums/Languages";
import { LifeJourneys } from "../../enums/LifeJourneys";
import { TalentEnergies } from "../../enums/TalentEnergies";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.InputType("UserCreateManyInput", {
  isAbstract: true
})
export class UserCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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
  animal?: string | undefined;

  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: true
  })
  archetypeId?: "mentor" | "herald" | "gatekeeper" | "joker" | undefined;

  @TypeGraphQL.Field(_type => LifeJourneys, {
    nullable: true
  })
  lifeJourneyId?: "learn" | "stand" | "resolve" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  talent?: string | undefined;

  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: true
  })
  talentLevelId?: "ego" | "emotion" | "tao" | undefined;

  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: true
  })
  talentEnergyId?: "push" | "neutral" | "pull" | undefined;

  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: true
  })
  heroJourneyProgress?: "mentor" | "herald" | "gatekeeper" | "joker" | undefined;
}
