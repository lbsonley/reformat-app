import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneys } from "../../enums/LifeJourneys";

@TypeGraphQL.InputType("NullableEnumLifeJourneysFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumLifeJourneysFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => LifeJourneys, {
    nullable: true
  })
  set?: "learn" | "stand" | "resolve" | undefined;
}
