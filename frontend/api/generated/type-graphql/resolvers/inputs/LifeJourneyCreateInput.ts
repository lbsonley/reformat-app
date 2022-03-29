import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutLifeJourneyInput } from "../inputs/UserCreateNestedManyWithoutLifeJourneyInput";
import { LifeJourneys } from "../../enums/LifeJourneys";

@TypeGraphQL.InputType("LifeJourneyCreateInput", {
  isAbstract: true
})
export class LifeJourneyCreateInput {
  @TypeGraphQL.Field(_type => LifeJourneys, {
    nullable: false
  })
  id!: "learn" | "stand" | "resolve";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLifeJourneyInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutLifeJourneyInput | undefined;
}
