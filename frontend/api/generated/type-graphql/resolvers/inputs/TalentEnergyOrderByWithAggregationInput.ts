import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergyCountOrderByAggregateInput } from "../inputs/TalentEnergyCountOrderByAggregateInput";
import { TalentEnergyMaxOrderByAggregateInput } from "../inputs/TalentEnergyMaxOrderByAggregateInput";
import { TalentEnergyMinOrderByAggregateInput } from "../inputs/TalentEnergyMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TalentEnergyOrderByWithAggregationInput", {
  isAbstract: true
})
export class TalentEnergyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TalentEnergyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TalentEnergyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TalentEnergyMinOrderByAggregateInput | undefined;
}
