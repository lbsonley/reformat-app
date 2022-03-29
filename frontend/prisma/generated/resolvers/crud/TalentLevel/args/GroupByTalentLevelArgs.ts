import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentLevelOrderByWithAggregationInput } from "../../../inputs/TalentLevelOrderByWithAggregationInput";
import { TalentLevelScalarWhereWithAggregatesInput } from "../../../inputs/TalentLevelScalarWhereWithAggregatesInput";
import { TalentLevelWhereInput } from "../../../inputs/TalentLevelWhereInput";
import { TalentLevelScalarFieldEnum } from "../../../../enums/TalentLevelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTalentLevelArgs {
  @TypeGraphQL.Field(_type => TalentLevelWhereInput, {
    nullable: true
  })
  where?: TalentLevelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TalentLevelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TalentLevelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TalentLevelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => TalentLevelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TalentLevelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
