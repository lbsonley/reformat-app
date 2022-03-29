import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArchetypeOrderByWithRelationInput } from "../../../inputs/ArchetypeOrderByWithRelationInput";
import { ArchetypeWhereInput } from "../../../inputs/ArchetypeWhereInput";
import { ArchetypeWhereUniqueInput } from "../../../inputs/ArchetypeWhereUniqueInput";
import { ArchetypeScalarFieldEnum } from "../../../../enums/ArchetypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyArchetypeArgs {
  @TypeGraphQL.Field(_type => ArchetypeWhereInput, {
    nullable: true
  })
  where?: ArchetypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArchetypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ArchetypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ArchetypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: ArchetypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ArchetypeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
