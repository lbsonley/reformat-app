import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTalentLevelInput } from "../inputs/UserCreateWithoutTalentLevelInput";
import { UserUpdateWithoutTalentLevelInput } from "../inputs/UserUpdateWithoutTalentLevelInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutTalentLevelInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutTalentLevelInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTalentLevelInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTalentLevelInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTalentLevelInput, {
    nullable: false
  })
  create!: UserCreateWithoutTalentLevelInput;
}
