import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevelCountOrderByAggregateInput } from "../inputs/TalentLevelCountOrderByAggregateInput";
import { TalentLevelMaxOrderByAggregateInput } from "../inputs/TalentLevelMaxOrderByAggregateInput";
import { TalentLevelMinOrderByAggregateInput } from "../inputs/TalentLevelMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TalentLevelOrderByWithAggregationInput", {
  isAbstract: true
})
export class TalentLevelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TalentLevelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TalentLevelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TalentLevelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TalentLevelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TalentLevelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TalentLevelMinOrderByAggregateInput | undefined;
}
