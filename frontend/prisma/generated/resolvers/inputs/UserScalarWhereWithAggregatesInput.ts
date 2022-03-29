import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumArchetypesNullableWithAggregatesFilter } from "../inputs/EnumArchetypesNullableWithAggregatesFilter";
import { EnumLanguagesWithAggregatesFilter } from "../inputs/EnumLanguagesWithAggregatesFilter";
import { EnumLifeJourneysNullableWithAggregatesFilter } from "../inputs/EnumLifeJourneysNullableWithAggregatesFilter";
import { EnumTalentEnergiesNullableWithAggregatesFilter } from "../inputs/EnumTalentEnergiesNullableWithAggregatesFilter";
import { EnumTalentLevelsNullableWithAggregatesFilter } from "../inputs/EnumTalentLevelsNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  firstName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lastName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumLanguagesWithAggregatesFilter, {
    nullable: true
  })
  language?: EnumLanguagesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  animal?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumArchetypesNullableWithAggregatesFilter, {
    nullable: true
  })
  archetypeId?: EnumArchetypesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumLifeJourneysNullableWithAggregatesFilter, {
    nullable: true
  })
  lifeJourneyId?: EnumLifeJourneysNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  talent?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTalentLevelsNullableWithAggregatesFilter, {
    nullable: true
  })
  talentLevelId?: EnumTalentLevelsNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTalentEnergiesNullableWithAggregatesFilter, {
    nullable: true
  })
  talentEnergyId?: EnumTalentEnergiesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumArchetypesNullableWithAggregatesFilter, {
    nullable: true
  })
  heroJourneyProgress?: EnumArchetypesNullableWithAggregatesFilter | undefined;
}
