import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArchetypeOrderByWithRelationInput } from "../../../inputs/ArchetypeOrderByWithRelationInput";
import { ArchetypeWhereInput } from "../../../inputs/ArchetypeWhereInput";
import { ArchetypeWhereUniqueInput } from "../../../inputs/ArchetypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateArchetypeArgs {
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
}
