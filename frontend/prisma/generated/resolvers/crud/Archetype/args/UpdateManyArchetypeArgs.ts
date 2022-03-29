import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArchetypeUpdateManyMutationInput } from "../../../inputs/ArchetypeUpdateManyMutationInput";
import { ArchetypeWhereInput } from "../../../inputs/ArchetypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyArchetypeArgs {
  @TypeGraphQL.Field(_type => ArchetypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArchetypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ArchetypeWhereInput, {
    nullable: true
  })
  where?: ArchetypeWhereInput | undefined;
}
