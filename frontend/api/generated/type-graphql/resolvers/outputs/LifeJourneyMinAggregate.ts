import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneys } from "../../enums/LifeJourneys";

@TypeGraphQL.ObjectType("LifeJourneyMinAggregate", {
  isAbstract: true
})
export class LifeJourneyMinAggregate {
  @TypeGraphQL.Field(_type => LifeJourneys, {
    nullable: true
  })
  id!: "learn" | "stand" | "resolve" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;
}
