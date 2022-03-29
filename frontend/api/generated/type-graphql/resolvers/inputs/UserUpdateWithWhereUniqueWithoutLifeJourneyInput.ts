import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutLifeJourneyInput } from "../inputs/UserUpdateWithoutLifeJourneyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutLifeJourneyInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutLifeJourneyInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLifeJourneyInput, {
    nullable: false
  })
  data!: UserUpdateWithoutLifeJourneyInput;
}
