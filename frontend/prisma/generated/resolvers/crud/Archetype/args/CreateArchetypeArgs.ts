import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArchetypeCreateInput } from "../../../inputs/ArchetypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateArchetypeArgs {
  @TypeGraphQL.Field(_type => ArchetypeCreateInput, {
    nullable: false
  })
  data!: ArchetypeCreateInput;
}
