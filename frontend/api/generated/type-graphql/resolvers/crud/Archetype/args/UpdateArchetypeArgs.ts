import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArchetypeUpdateInput } from "../../../inputs/ArchetypeUpdateInput";
import { ArchetypeWhereUniqueInput } from "../../../inputs/ArchetypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateArchetypeArgs {
  @TypeGraphQL.Field(_type => ArchetypeUpdateInput, {
    nullable: false
  })
  data!: ArchetypeUpdateInput;

  @TypeGraphQL.Field(_type => ArchetypeWhereUniqueInput, {
    nullable: false
  })
  where!: ArchetypeWhereUniqueInput;
}
