import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArchetypeCountOrderByAggregateInput } from "../inputs/ArchetypeCountOrderByAggregateInput";
import { ArchetypeMaxOrderByAggregateInput } from "../inputs/ArchetypeMaxOrderByAggregateInput";
import { ArchetypeMinOrderByAggregateInput } from "../inputs/ArchetypeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ArchetypeOrderByWithAggregationInput", {
  isAbstract: true
})
export class ArchetypeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ArchetypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ArchetypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArchetypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ArchetypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArchetypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ArchetypeMinOrderByAggregateInput | undefined;
}
