import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneys } from "../../enums/LifeJourneys";

@TypeGraphQL.InputType("NestedEnumLifeJourneysNullableFilter", {
  isAbstract: true
})
export class NestedEnumLifeJourneysNullableFilter {
  @TypeGraphQL.Field(_type => LifeJourneys, {
    nullable: true
  })
  equals?: "learn" | "stand" | "resolve" | undefined;

  @TypeGraphQL.Field(_type => [LifeJourneys], {
    nullable: true
  })
  in?: Array<"learn" | "stand" | "resolve"> | undefined;

  @TypeGraphQL.Field(_type => [LifeJourneys], {
    nullable: true
  })
  notIn?: Array<"learn" | "stand" | "resolve"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLifeJourneysNullableFilter, {
    nullable: true
  })
  not?: NestedEnumLifeJourneysNullableFilter | undefined;
}
