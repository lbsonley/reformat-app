import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArchetypeCreateInput } from "../../../inputs/ArchetypeCreateInput";
import { ArchetypeUpdateInput } from "../../../inputs/ArchetypeUpdateInput";
import { ArchetypeWhereUniqueInput } from "../../../inputs/ArchetypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertArchetypeArgs {
  @TypeGraphQL.Field(_type => ArchetypeWhereUniqueInput, {
    nullable: false
  })
  where!: ArchetypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArchetypeCreateInput, {
    nullable: false
  })
  create!: ArchetypeCreateInput;

  @TypeGraphQL.Field(_type => ArchetypeUpdateInput, {
    nullable: false
  })
  update!: ArchetypeUpdateInput;
}
