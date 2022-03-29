import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumLifeJourneysNullableFilter } from "../inputs/NestedEnumLifeJourneysNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { LifeJourneys } from "../../enums/LifeJourneys";

@TypeGraphQL.InputType("NestedEnumLifeJourneysNullableWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumLifeJourneysNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumLifeJourneysNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumLifeJourneysNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLifeJourneysNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumLifeJourneysNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLifeJourneysNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumLifeJourneysNullableFilter | undefined;
}
