import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutArchetypeInput } from "../inputs/UserUpdateWithoutArchetypeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutArchetypeInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutArchetypeInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutArchetypeInput, {
    nullable: false
  })
  data!: UserUpdateWithoutArchetypeInput;
}
