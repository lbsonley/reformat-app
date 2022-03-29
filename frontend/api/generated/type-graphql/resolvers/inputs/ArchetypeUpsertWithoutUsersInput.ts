import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArchetypeCreateWithoutUsersInput } from "../inputs/ArchetypeCreateWithoutUsersInput";
import { ArchetypeUpdateWithoutUsersInput } from "../inputs/ArchetypeUpdateWithoutUsersInput";

@TypeGraphQL.InputType("ArchetypeUpsertWithoutUsersInput", {
  isAbstract: true
})
export class ArchetypeUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => ArchetypeUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: ArchetypeUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => ArchetypeCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ArchetypeCreateWithoutUsersInput;
}
