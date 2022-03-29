import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLifeJourneyInput } from "../inputs/UserCreateWithoutLifeJourneyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutLifeJourneyInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutLifeJourneyInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLifeJourneyInput, {
    nullable: false
  })
  create!: UserCreateWithoutLifeJourneyInput;
}
