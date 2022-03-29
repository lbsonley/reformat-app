import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumArchetypesNullableFilter } from "../inputs/EnumArchetypesNullableFilter";
import { EnumLanguagesFilter } from "../inputs/EnumLanguagesFilter";
import { EnumLifeJourneysNullableFilter } from "../inputs/EnumLifeJourneysNullableFilter";
import { EnumTalentEnergiesNullableFilter } from "../inputs/EnumTalentEnergiesNullableFilter";
import { EnumTalentLevelsNullableFilter } from "../inputs/EnumTalentLevelsNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UserScalarWhereInput", {
  isAbstract: true
})
export class UserScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  AND?: UserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  OR?: UserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  NOT?: UserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumLanguagesFilter, {
    nullable: true
  })
  language?: EnumLanguagesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  animal?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumArchetypesNullableFilter, {
    nullable: true
  })
  archetypeId?: EnumArchetypesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumLifeJourneysNullableFilter, {
    nullable: true
  })
  lifeJourneyId?: EnumLifeJourneysNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  talent?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTalentLevelsNullableFilter, {
    nullable: true
  })
  talentLevelId?: EnumTalentLevelsNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTalentEnergiesNullableFilter, {
    nullable: true
  })
  talentEnergyId?: EnumTalentEnergiesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumArchetypesNullableFilter, {
    nullable: true
  })
  heroJourneyProgress?: EnumArchetypesNullableFilter | undefined;
}
