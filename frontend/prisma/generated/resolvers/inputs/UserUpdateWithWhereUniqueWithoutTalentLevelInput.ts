import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutTalentLevelInput } from "../inputs/UserUpdateWithoutTalentLevelInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutTalentLevelInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutTalentLevelInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTalentLevelInput, {
    nullable: false
  })
  data!: UserUpdateWithoutTalentLevelInput;
}
