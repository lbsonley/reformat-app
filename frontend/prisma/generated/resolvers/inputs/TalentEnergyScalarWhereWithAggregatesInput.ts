import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTalentEnergiesWithAggregatesFilter } from "../inputs/EnumTalentEnergiesWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TalentEnergyScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TalentEnergyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TalentEnergyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TalentEnergyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TalentEnergyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TalentEnergyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TalentEnergyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TalentEnergyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumTalentEnergiesWithAggregatesFilter, {
    nullable: true
  })
  id?: EnumTalentEnergiesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
