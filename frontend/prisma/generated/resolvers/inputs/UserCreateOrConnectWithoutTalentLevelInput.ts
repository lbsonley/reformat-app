import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTalentLevelInput } from "../inputs/UserCreateWithoutTalentLevelInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutTalentLevelInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutTalentLevelInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTalentLevelInput, {
    nullable: false
  })
  create!: UserCreateWithoutTalentLevelInput;
}
