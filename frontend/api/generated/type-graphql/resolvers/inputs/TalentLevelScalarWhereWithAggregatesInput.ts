import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTalentLevelsWithAggregatesFilter } from "../inputs/EnumTalentLevelsWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TalentLevelScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TalentLevelScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TalentLevelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TalentLevelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TalentLevelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TalentLevelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TalentLevelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TalentLevelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumTalentLevelsWithAggregatesFilter, {
    nullable: true
  })
  id?: EnumTalentLevelsWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
