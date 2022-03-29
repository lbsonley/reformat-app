import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumArchetypesWithAggregatesFilter } from "../inputs/EnumArchetypesWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ArchetypeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ArchetypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ArchetypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ArchetypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArchetypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ArchetypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArchetypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ArchetypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumArchetypesWithAggregatesFilter, {
    nullable: true
  })
  id?: EnumArchetypesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
