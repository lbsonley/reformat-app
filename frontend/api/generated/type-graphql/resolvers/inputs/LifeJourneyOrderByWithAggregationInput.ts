import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneyCountOrderByAggregateInput } from "../inputs/LifeJourneyCountOrderByAggregateInput";
import { LifeJourneyMaxOrderByAggregateInput } from "../inputs/LifeJourneyMaxOrderByAggregateInput";
import { LifeJourneyMinOrderByAggregateInput } from "../inputs/LifeJourneyMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LifeJourneyOrderByWithAggregationInput", {
  isAbstract: true
})
export class LifeJourneyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LifeJourneyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LifeJourneyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LifeJourneyMinOrderByAggregateInput | undefined;
}
