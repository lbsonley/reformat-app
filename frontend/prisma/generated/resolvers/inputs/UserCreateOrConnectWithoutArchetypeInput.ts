import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutArchetypeInput } from "../inputs/UserCreateWithoutArchetypeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutArchetypeInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutArchetypeInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutArchetypeInput, {
    nullable: false
  })
  create!: UserCreateWithoutArchetypeInput;
}
