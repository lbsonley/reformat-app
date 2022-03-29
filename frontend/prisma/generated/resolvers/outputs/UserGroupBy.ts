import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { Archetypes } from "../../enums/Archetypes";
import { Languages } from "../../enums/Languages";
import { LifeJourneys } from "../../enums/LifeJourneys";
import { TalentEnergies } from "../../enums/TalentEnergies";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.ObjectType("UserGroupBy", {
  isAbstract: true
})
export class UserGroupBy {
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

  @TypeGraphQL.Field(_type => UserCountAggregate, {
    nullable: true
  })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field(_type => UserMinAggregate, {
    nullable: true
  })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field(_type => UserMaxAggregate, {
    nullable: true
  })
  _max!: UserMaxAggregate | null;
}
