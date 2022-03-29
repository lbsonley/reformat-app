import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArchetypeOrderByWithAggregationInput } from "../../../inputs/ArchetypeOrderByWithAggregationInput";
import { ArchetypeScalarWhereWithAggregatesInput } from "../../../inputs/ArchetypeScalarWhereWithAggregatesInput";
import { ArchetypeWhereInput } from "../../../inputs/ArchetypeWhereInput";
import { ArchetypeScalarFieldEnum } from "../../../../enums/ArchetypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByArchetypeArgs {
  @TypeGraphQL.Field(_type => ArchetypeWhereInput, {
    nullable: true
  })
  where?: ArchetypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArchetypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ArchetypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArchetypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => ArchetypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ArchetypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
