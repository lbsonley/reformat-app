import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LifeJourneyOrderByWithAggregationInput } from "../../../inputs/LifeJourneyOrderByWithAggregationInput";
import { LifeJourneyScalarWhereWithAggregatesInput } from "../../../inputs/LifeJourneyScalarWhereWithAggregatesInput";
import { LifeJourneyWhereInput } from "../../../inputs/LifeJourneyWhereInput";
import { LifeJourneyScalarFieldEnum } from "../../../../enums/LifeJourneyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLifeJourneyArgs {
  @TypeGraphQL.Field(_type => LifeJourneyWhereInput, {
    nullable: true
  })
  where?: LifeJourneyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LifeJourneyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LifeJourneyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LifeJourneyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => LifeJourneyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LifeJourneyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
