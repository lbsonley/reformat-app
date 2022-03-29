import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArchetypeCreateManyInput } from "../../../inputs/ArchetypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyArchetypeArgs {
  @TypeGraphQL.Field(_type => [ArchetypeCreateManyInput], {
    nullable: false
  })
  data!: ArchetypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
