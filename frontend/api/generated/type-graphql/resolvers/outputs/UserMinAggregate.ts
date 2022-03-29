import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Archetypes } from "../../enums/Archetypes";
import { Languages } from "../../enums/Languages";
import { LifeJourneys } from "../../enums/LifeJourneys";
import { TalentEnergies } from "../../enums/TalentEnergies";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.ObjectType("UserMinAggregate", {
  isAbstract: true
})
export class UserMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName!: string | null;

  @TypeGraphQL.Field(_type => Languages, {
    nullable: true
  })
  language!: "de" | "en" | "fr" | "it" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  animal!: string | null;

  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: true
  })
  archetypeId!: "mentor" | "herald" | "gatekeeper" | "joker" | null;

  @TypeGraphQL.Field(_type => LifeJourneys, {
    nullable: true
  })
  lifeJourneyId!: "learn" | "stand" | "resolve" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  talent!: string | null;

  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: true
  })
  talentLevelId!: "ego" | "emotion" | "tao" | null;

  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: true
  })
  talentEnergyId!: "push" | "neutral" | "pull" | null;

  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: true
  })
  heroJourneyProgress!: "mentor" | "herald" | "gatekeeper" | "joker" | null;
}
