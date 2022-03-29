import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLifeJourneyInput } from "../inputs/UserCreateWithoutLifeJourneyInput";
import { UserUpdateWithoutLifeJourneyInput } from "../inputs/UserUpdateWithoutLifeJourneyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutLifeJourneyInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutLifeJourneyInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLifeJourneyInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLifeJourneyInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLifeJourneyInput, {
    nullable: false
  })
  create!: UserCreateWithoutLifeJourneyInput;
}
