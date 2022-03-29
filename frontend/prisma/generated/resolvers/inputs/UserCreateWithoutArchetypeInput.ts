import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneyCreateNestedOneWithoutUsersInput } from "../inputs/LifeJourneyCreateNestedOneWithoutUsersInput";
import { TalentEnergyCreateNestedOneWithoutUsersInput } from "../inputs/TalentEnergyCreateNestedOneWithoutUsersInput";
import { TalentLevelCreateNestedOneWithoutUsersInput } from "../inputs/TalentLevelCreateNestedOneWithoutUsersInput";
import { Archetypes } from "../../enums/Archetypes";
import { Languages } from "../../enums/Languages";

@TypeGraphQL.InputType("UserCreateWithoutArchetypeInput", {
  isAbstract: true
})
export class UserCreateWithoutArchetypeInput {
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

  @TypeGraphQL.Field(_type => LifeJourneyCreateNestedOneWithoutUsersInput, {
    nullable: true
  })
  lifeJourney?: LifeJourneyCreateNestedOneWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  talent?: string | undefined;

  @TypeGraphQL.Field(_type => TalentLevelCreateNestedOneWithoutUsersInput, {
    nullable: true
  })
  talentLevel?: TalentLevelCreateNestedOneWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyCreateNestedOneWithoutUsersInput, {
    nullable: true
  })
  talentEnergy?: TalentEnergyCreateNestedOneWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: true
  })
  heroJourneyProgress?: "mentor" | "herald" | "gatekeeper" | "joker" | undefined;
}
