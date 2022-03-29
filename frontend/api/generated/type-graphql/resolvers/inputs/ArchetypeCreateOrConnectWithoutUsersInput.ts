import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArchetypeCreateWithoutUsersInput } from "../inputs/ArchetypeCreateWithoutUsersInput";
import { ArchetypeWhereUniqueInput } from "../inputs/ArchetypeWhereUniqueInput";

@TypeGraphQL.InputType("ArchetypeCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class ArchetypeCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => ArchetypeWhereUniqueInput, {
    nullable: false
  })
  where!: ArchetypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArchetypeCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ArchetypeCreateWithoutUsersInput;
}
