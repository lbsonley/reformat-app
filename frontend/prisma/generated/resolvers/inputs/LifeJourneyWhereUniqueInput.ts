import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneys } from "../../enums/LifeJourneys";

@TypeGraphQL.InputType("LifeJourneyWhereUniqueInput", {
  isAbstract: true
})
export class LifeJourneyWhereUniqueInput {
  @TypeGraphQL.Field(_type => LifeJourneys, {
    nullable: true
  })
  id?: "learn" | "stand" | "resolve" | undefined;
}
