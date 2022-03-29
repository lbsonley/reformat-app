import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutArchetypeInput } from "../inputs/UserCreateWithoutArchetypeInput";
import { UserUpdateWithoutArchetypeInput } from "../inputs/UserUpdateWithoutArchetypeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutArchetypeInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutArchetypeInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutArchetypeInput, {
    nullable: false
  })
  update!: UserUpdateWithoutArchetypeInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutArchetypeInput, {
    nullable: false
  })
  create!: UserCreateWithoutArchetypeInput;
}
