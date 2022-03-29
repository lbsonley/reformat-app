import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentEnergyOrderByWithAggregationInput } from "../../../inputs/TalentEnergyOrderByWithAggregationInput";
import { TalentEnergyScalarWhereWithAggregatesInput } from "../../../inputs/TalentEnergyScalarWhereWithAggregatesInput";
import { TalentEnergyWhereInput } from "../../../inputs/TalentEnergyWhereInput";
import { TalentEnergyScalarFieldEnum } from "../../../../enums/TalentEnergyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTalentEnergyArgs {
  @TypeGraphQL.Field(_type => TalentEnergyWhereInput, {
    nullable: true
  })
  where?: TalentEnergyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TalentEnergyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TalentEnergyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TalentEnergyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => TalentEnergyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TalentEnergyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
