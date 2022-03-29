import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneyCreateWithoutUsersInput } from "../inputs/LifeJourneyCreateWithoutUsersInput";
import { LifeJourneyWhereUniqueInput } from "../inputs/LifeJourneyWhereUniqueInput";

@TypeGraphQL.InputType("LifeJourneyCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class LifeJourneyCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => LifeJourneyWhereUniqueInput, {
    nullable: false
  })
  where!: LifeJourneyWhereUniqueInput;

  @TypeGraphQL.Field(_type => LifeJourneyCreateWithoutUsersInput, {
    nullable: false
  })
  create!: LifeJourneyCreateWithoutUsersInput;
}
