import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArchetypeWhereInput } from "../../../inputs/ArchetypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyArchetypeArgs {
  @TypeGraphQL.Field(_type => ArchetypeWhereInput, {
    nullable: true
  })
  where?: ArchetypeWhereInput | undefined;
}
