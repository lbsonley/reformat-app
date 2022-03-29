import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArchetypeWhereUniqueInput } from "../../../inputs/ArchetypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteArchetypeArgs {
  @TypeGraphQL.Field(_type => ArchetypeWhereUniqueInput, {
    nullable: false
  })
  where!: ArchetypeWhereUniqueInput;
}
