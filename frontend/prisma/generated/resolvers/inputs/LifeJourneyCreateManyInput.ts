import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneys } from "../../enums/LifeJourneys";

@TypeGraphQL.InputType("LifeJourneyCreateManyInput", {
  isAbstract: true
})
export class LifeJourneyCreateManyInput {
  @TypeGraphQL.Field(_type => LifeJourneys, {
    nullable: false
  })
  id!: "learn" | "stand" | "resolve";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
